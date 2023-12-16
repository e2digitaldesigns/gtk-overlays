import { create, StoreApi } from "zustand";
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
  trueFalseVotesParsed,
  TrueFalseVotesObj
} from "../../types";

import { getKeyWithHighestValue } from "../../_utils/getKeyWithHighestValue";

export interface IVotingDataStore {
  votes: IVotes[];
  voting: IVotingState;
  votingStreak: IVoteStreaks;
  leadingSeat: string[];
  trueFalseState: TrueFalseVotesObj;
  trueOrFalseVotes: trueFalseVotesParsed;

  initVoting: () => void;
  logTrueOrFlaseVote: (data: IVotes) => void;
  handleVoting: (vote: IVotes, type: "add" | "remove" | "super") => void;
  handleVotingSuper: (data: IVotes) => void;
  clearVotes: () => void;
}

const setStorageData = (key: string, value: string | object) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const useVotingDataStore = create<IVotingDataStore>(
  (
    set: StoreApi<IVotingDataStore>["setState"],
    get: StoreApi<IVotingDataStore>["getState"]
  ) => {
    return {
      votes: [],
      voting: initVotingState,
      votingStreak: initVotingStreakState,
      leadingSeat: [],
      trueFalseState: {},
      trueOrFalseVotes: {
        fullVotes: {},
        trueCount: 0,
        falseCount: 0
      },

      initVoting: () => {
        const dataTally = window.localStorage.getItem(STORAGE_KEY.TALLY);
        const dataStreak = window.localStorage.getItem(STORAGE_KEY.STREAK);

        const dataTrueFalse = window.localStorage.getItem(
          STORAGE_KEY.TOPIC_VOTING_TRUE_FALSE
        );

        set({ voting: dataTally ? JSON.parse(dataTally) : initVotingState });

        set({
          votingStreak: dataStreak
            ? JSON.parse(dataStreak)
            : initVotingStreakState
        });

        const trueFalseState = dataTrueFalse ? JSON.parse(dataTrueFalse) : {};

        set({
          trueFalseState
        });
      },

      logTrueOrFlaseVote: (data: IVotes) => {
        let currentTopicId = window.localStorage.getItem(
          STORAGE_KEY.CURRENT_TOPIC
        );

        currentTopicId = currentTopicId && JSON.parse(currentTopicId);

        if (!currentTopicId) return;

        const newState: TrueFalseVotesObj = _cloneDeep(get().trueFalseState);

        newState[currentTopicId] = {
          ...(newState?.[currentTopicId] || {}),
          [data.username]: data.action === "true" ? true : false
        };

        setStorageData(STORAGE_KEY.TOPIC_VOTING_TRUE_FALSE, newState);
        set({
          trueFalseState: newState
        });
      },

      handleVoting: (vote: IVotes, type: "add" | "remove" | "super") => {
        const newVotes = _cloneDeep(get().votes);
        const newVoting = _cloneDeep(get().voting);
        const newStreak = _cloneDeep(get().votingStreak);
        const hostNum = vote.host as keyof IVotingState;

        //Votes
        newVotes.push(vote);

        newVoting[hostNum] =
          type === "add"
            ? newVoting[hostNum] + 1
            : type === "super"
            ? newVoting[hostNum] + 5
            : newVoting[hostNum] - 1;

        // Streak
        if (vote.action === "add") {
          Object.keys(newStreak).forEach(key => {
            newStreak[key].add = key === vote.host ? newStreak[key].add + 1 : 0;
            if (key === vote.host) {
              newStreak[key].remove = 0;
            }
          });
        }

        if (vote.action === "super") {
          Object.keys(newStreak).forEach(key => {
            newStreak[key].add = key === vote.host ? newStreak[key].add + 5 : 0;
            if (key === vote.host) {
              newStreak[key].remove = 0;
            }
          });
        }

        if (vote.action === "remove") {
          Object.keys(newStreak).forEach(key => {
            newStreak[key].remove =
              key === vote.host ? newStreak[key].remove + 1 : 0;
            if (key === vote.host) {
              newStreak[key].add = 0;
            }
          });
        }

        //Update
        set({
          votes: newVotes,
          votingStreak: newStreak,
          voting: newVoting,
          leadingSeat: getKeyWithHighestValue(newVoting)
        });

        if (!_isEqual(initVotingStreakState, newStreak)) {
          setStorageData(STORAGE_KEY.STREAK, newStreak);
        }

        if (!_isEqual(initVotingState, newVoting)) {
          setStorageData(STORAGE_KEY.TALLY, newVoting);
        }
      },

      handleVotingSuper: (data: IVotes) => {
        const topicVoteCount = window.localStorage.getItem(
          STORAGE_KEY.TOPIC_VOTING_COUNT
        );

        let currentTopicId = window.localStorage.getItem(
          STORAGE_KEY.CURRENT_TOPIC
        );

        currentTopicId = currentTopicId && JSON.parse(currentTopicId);

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
            setStorageData(STORAGE_KEY.TOPIC_VOTING_COUNT, voting);
            get().handleVoting(data, "super");
          }
        }
      },

      clearVotes: () => {
        setStorageData(STORAGE_KEY.TALLY, initVotingState);
        setStorageData(STORAGE_KEY.STREAK, initVotingStreakState);
        setStorageData(STORAGE_KEY.TOPIC_VOTING_TRUE_FALSE, {});
        setStorageData(STORAGE_KEY.TOPIC_VOTING_COUNT, {});

        set({
          voting: initVotingState,
          votingStreak: initVotingStreakState,
          trueFalseState: {},
          trueOrFalseVotes: { fullVotes: {}, trueCount: 0, falseCount: 0 }
        });
      }
    };
  }
);

export default useVotingDataStore;
