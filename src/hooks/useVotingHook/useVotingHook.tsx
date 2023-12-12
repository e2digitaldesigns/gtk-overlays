import React from "react";
import socketServices from "../../services/socketServices";
import _cloneDeep from "lodash/cloneDeep";
import _isEqual from "lodash/isEqual";
import _includes from "lodash/includes";
import {
  STORAGE_KEY,
  initVotingState,
  initVotingStreakState,
  IVotes,
  IVoteStreaks,
  IVotingState,
  TrueFalseVotesObj
} from "../../types";

import { getKeyWithHighestValue } from "../../_utils/getKeyWithHighestValue";

const useVotingHook = () => {
  const [trueFalseState, setTrueFalseState] = React.useState<TrueFalseVotesObj>(
    {}
  );
  const [voting, setVoting] = React.useState<IVotingState>(initVotingState);
  const [votingStreak, setVotingStreak] = React.useState<IVoteStreaks>(
    initVotingStreakState
  );
  const [votes, setVotes] = React.useState<IVotes[]>([]);

  const queryParams = new URLSearchParams(window.location.search);

  const currentTopicIdStorage = window.localStorage.getItem(
    STORAGE_KEY.CURRENT_TOPIC
  );

  const currentTopicId = currentTopicIdStorage
    ? JSON.parse(currentTopicIdStorage) || null
    : null;

  React.useEffect(() => {
    const dataTally = window.localStorage.getItem(STORAGE_KEY.TALLY);
    const dataStreak = window.localStorage.getItem(STORAGE_KEY.STREAK);
    const dataTrueFalse = window.localStorage.getItem(
      STORAGE_KEY.TOPIC_VOTING_TRUE_FALSE
    );

    if (dataTally) {
      JSON.parse(dataTally) && setVoting(JSON.parse(dataTally));
    }

    if (dataStreak) {
      JSON.parse(dataStreak) && setVotingStreak(JSON.parse(dataStreak));
    }

    if (dataTrueFalse) {
      JSON.parse(dataTrueFalse) && setTrueFalseState(JSON.parse(dataTrueFalse));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddVote = React.useCallback(
    (data: IVotes) => {
      const state = _cloneDeep(votes);
      state.push(data);
      setVotes(state);

      const streak = _cloneDeep(votingStreak);

      if (data.action === "add") {
        Object.keys(streak).forEach(key => {
          streak[key].add = key === data.host ? streak[key].add + 1 : 0;
          if (key === data.host) {
            // streak[key].add = streak[key].add + 1;
            streak[key].remove = 0;
          }
        });
      }

      if (data.action === "super") {
        Object.keys(streak).forEach(key => {
          streak[key].add = key === data.host ? streak[key].add + 5 : 0;
          if (key === data.host) {
            streak[key].remove = 0;
          }
        });
      }

      if (data.action === "remove") {
        Object.keys(streak).forEach(key => {
          streak[key].remove = key === data.host ? streak[key].remove + 1 : 0;
          if (key === data.host) {
            // streak[key].remove = streak[key].remove + 1;
            streak[key].add = 0;
          }
        });
      }

      setVotingStreak(streak);
    },
    [votes, votingStreak]
  );

  const handleVoting = React.useCallback(
    (vote: IVotes, type: "add" | "remove" | "super") => {
      handleAddVote(vote);

      const newState = _cloneDeep(voting);
      const hostNum = vote.host as keyof IVotingState;

      newState[hostNum] =
        type === "add"
          ? newState[hostNum] + 1
          : type === "super"
          ? newState[hostNum] + 5
          : newState[hostNum] - 1;

      setVoting(newState);
    },
    [handleAddVote, voting]
  );

  const handleTrueOrFalse = (username: string, type: "true" | "false") => {
    if (!currentTopicId) {
      console.log("No current topic ID found. Exiting.");
      return;
    }

    setTrueFalseState((prevState: TrueFalseVotesObj) => {
      const newState = _cloneDeep(prevState);

      if (newState.hasOwnProperty(currentTopicId)) {
        newState[currentTopicId] = {
          ...newState[currentTopicId],
          [username]: type === "true" ? true : false
        };
      } else {
        newState[currentTopicId] = {};
        newState[currentTopicId][username] = type === "true" ? true : false;
      }

      window.localStorage.setItem(
        STORAGE_KEY.TOPIC_VOTING_TRUE_FALSE,
        JSON.stringify(newState)
      );

      return newState;
    });
  };

  React.useEffect(() => {
    let stillHere = true;

    socketServices.subscribeHostVoting((err: unknown, data: any) => {
      if (data?.uid !== queryParams.get("uid")) return;
      if (!data?.tid || data?.tid !== queryParams.get("tid")) return;

      switch (data.action) {
        case "true":
        case "false":
          if (stillHere) {
            handleTrueOrFalse(data.username, data.action);
          }
          break;
        case "add":
          if (stillHere) {
            handleVoting(data, "add");
          }
          break;

        case "super":
          const topicVoteCount = window.localStorage.getItem(
            STORAGE_KEY.TOPIC_VOTING_COUNT
          );

          const currentTopicId = window.localStorage.getItem(
            STORAGE_KEY.CURRENT_TOPIC
          );

          if (topicVoteCount && currentTopicId) {
            const voting = JSON.parse(topicVoteCount);
            const currentTopic = JSON.parse(currentTopicId);

            if (
              !voting?.[currentTopic] ||
              !_includes(voting?.[currentTopic], data.username)
            ) {
              if (!voting?.[currentTopic]) {
                voting[currentTopic] = [];
              }

              voting[currentTopic].push(data.username);

              window.localStorage.setItem(
                STORAGE_KEY.TOPIC_VOTING_COUNT,
                JSON.stringify(voting)
              );

              handleVoting(data, "super");
            }
          }

          break;

        case "remove":
          if (stillHere) {
            handleVoting(data, "remove");
          }
          break;

        case "clear-votes":
          window.localStorage.setItem(
            STORAGE_KEY.TALLY,
            JSON.stringify(initVotingState)
          );

          window.localStorage.setItem(
            STORAGE_KEY.STREAK,
            JSON.stringify(initVotingStreakState)
          );

          window.localStorage.setItem(
            STORAGE_KEY.TOPIC_VOTING_COUNT,
            JSON.stringify({})
          );

          if (stillHere) {
            setVoting(initVotingState);
            setVotingStreak(initVotingStreakState);
            setVotes([]);
          }
          break;
      }
    });

    return () => {
      stillHere = false;
      socketServices.unSubscribeHostVoting();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleVoting]);

  React.useEffect(() => {
    if (_isEqual(initVotingState, voting)) return;
    window.localStorage.setItem(STORAGE_KEY.TALLY, JSON.stringify(voting));
  }, [voting]);

  React.useEffect(() => {
    if (_isEqual(initVotingStreakState, votingStreak)) return;
    window.localStorage.setItem(
      STORAGE_KEY.STREAK,
      JSON.stringify(votingStreak)
    );
  }, [votingStreak]);

  const trueFalseParser = () => {
    const topicVotes = trueFalseState?.[currentTopicId] || null;

    const obj = {
      fullVotes: topicVotes || {},
      trueCount: topicVotes
        ? Object.values(topicVotes).filter(value => value).length
        : 0,

      falseCount: topicVotes
        ? Object.values(topicVotes)?.filter(value => !value).length
        : 0
    };

    return obj;
  };

  return {
    votes,
    voting,
    votingStreak,
    leadingSeat: getKeyWithHighestValue(voting),
    trueOrFalseVotes: trueFalseParser()
  };
};

export default useVotingHook;
