import React from "react";
import socketServices from "../../services/socketServices";
import _cloneDeep from "lodash/cloneDeep";
import _isEqual from "lodash/isEqual";
import _includes from "lodash/includes";
import { STORAGE_KEY } from "../../types";

interface IVotingState {
  [key: string]: number;
}

export interface IVotes {
  _id: string;
  action: "add" | "remove" | "super";
  username: string;
  channel: string;
  host: string;
  tid: string;
  uid: string;
}

export interface IVoteStreaks {
  [key: string]: {
    add: number;
    remove: number;
  };
}

const initVotingState: IVotingState = {
  "1": 0,
  "2": 0,
  "3": 0,
  "4": 0,
  "5": 0,
  "6": 0
};

const initVotingStreakState: IVoteStreaks = {
  "1": { add: 0, remove: 0 },
  "2": { add: 0, remove: 0 },
  "3": { add: 0, remove: 0 },
  "4": { add: 0, remove: 0 },
  "5": { add: 0, remove: 0 },
  "6": { add: 0, remove: 0 }
};

function getKeyWithHighestValue(obj: any): string[] {
  let maxKeys: string[] = [];
  let maxValue = -Infinity;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] > maxValue) {
        maxKeys = [key];
        maxValue = obj[key];
      } else if (obj[key] === maxValue) {
        maxKeys.push(key);
      }
    }
  }

  return maxKeys;
}

const useVotingHook = () => {
  const [voting, setVoting] = React.useState<IVotingState>(initVotingState);
  const [votingStreak, setVotingStreak] = React.useState<IVoteStreaks>(
    initVotingStreakState
  );
  const [votes, setVotes] = React.useState<IVotes[]>([]);

  const queryParams = new URLSearchParams(window.location.search);

  React.useEffect(() => {
    const dataTally = window.localStorage.getItem(STORAGE_KEY.TALLY);
    const dataStreak = window.localStorage.getItem(STORAGE_KEY.STREAK);

    if (dataTally) {
      JSON.parse(dataTally) && setVoting(JSON.parse(dataTally));
    }

    if (dataStreak) {
      JSON.parse(dataStreak) && setVotingStreak(JSON.parse(dataStreak));
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

  React.useEffect(() => {
    let stillHere = true;

    socketServices.subscribeHostVoting((err: unknown, data: any) => {
      if (data?.uid !== queryParams.get("uid")) return;
      if (!data?.tid || data?.tid !== queryParams.get("tid")) return;

      switch (data.action) {
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
          console.log(186, "clear-votes");
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

  return {
    votes,
    voting,
    votingStreak,
    leadingSeat: getKeyWithHighestValue(voting)
  };
};

export default useVotingHook;
