import { create, StoreApi } from "zustand";
import { persist } from "zustand/middleware";
import _cloneDeep from "lodash/cloneDeep";
import _includes from "lodash/includes";

import {
  STORAGE_KEY,
  initVotingState,
  initVotingStreakState,
  IVotes,
  IVoteStreaks,
  IVotingState,
  TopicVotesParsed,
  TopicVotesObj,
  IntTopic
} from "../../types";

import { getKeyWithHighestValue } from "../../_utils/getKeyWithHighestValue";

export interface SuperVote {
  host: string;
  voter: string;
}

export interface IVotingDataStore {
  topicId: string;
  votingOptions: string[];
  votes: IVotes[];
  votingState: IVotingState;
  votingStreak: IVoteStreaks;
  leadingSeat: string[];
  topicVotingState: TopicVotesObj;
  topicVotingParsed: TopicVotesParsed;
  superVoteLog: { [key: string]: SuperVote[] };

  setTopicId: (topic: IntTopic) => void;
  logTopicVote: (data: IVotes) => void;
  handleHostVoting: (vote: IVotes, type: "add" | "remove" | "super") => void;
  handleHostVotingSuper: (data: IVotes) => void;
  clearHostVotes: () => void;
  clearTopicVotes: () => void;
}

const useVotingDataStore = create(
  persist<IVotingDataStore>(
    (
      set: StoreApi<IVotingDataStore>["setState"],
      get: StoreApi<IVotingDataStore>["getState"]
    ) => {
      return {
        topicId: "",
        votingOptions: [],
        votes: [],
        votingState: initVotingState,
        votingStreak: initVotingStreakState,
        leadingSeat: [],
        topicVotingState: {},
        topicVotingParsed: {
          fullVotes: {},
          trueCount: 0,
          falseCount: 0,
          oneCount: 0,
          twoCount: 0,
          yesCount: 0,
          noCount: 0
        },
        superVoteLog: {},

        setTopicId: (topic: IntTopic) => {
          const topicId = topic._id;
          set({ topicId: topicId });

          const superVoteLog = _cloneDeep(get().superVoteLog);
          const newSuperVoteLog = { ...superVoteLog };

          if (!newSuperVoteLog[topicId]) {
            newSuperVoteLog[topicId] = [];
          }

          set({ superVoteLog: newSuperVoteLog });

          if (topic.votingOptions.length) {
            set({ votingOptions: topic.votingOptions.map(opt => opt.value) });
          } else {
            set({ votingOptions: [] });
          }
        },

        logTopicVote: (data: IVotes) => {
          const votingOptions = get().votingOptions;
          if (!votingOptions.includes(data.action)) return;

          const currentTopicId = get().topicId;
          const newState = structuredClone(get().topicVotingState);

          newState[currentTopicId] = {
            ...(newState?.[currentTopicId] || {}),
            [data.username]: data.action
          };

          set({
            topicVotingState: newState
          });
        },

        handleHostVoting: (vote: IVotes, type: "add" | "remove" | "super") => {
          const newVotes = _cloneDeep(get().votes);
          const newVoting = _cloneDeep(get().votingState);
          const newStreak = _cloneDeep(get().votingStreak);
          const hostNum = vote.host as keyof IVotingState;

          newVotes.push(vote);

          newVoting[hostNum] =
            type === "add"
              ? newVoting[hostNum] + 1
              : type === "super"
                ? newVoting[hostNum] + 5
                : newVoting[hostNum] - 1;

          //Streak
          if (vote.action === "add") {
            Object.keys(newStreak).forEach(key => {
              newStreak[key].add =
                key === vote.host ? newStreak[key].add + 1 : 0;
              if (key === vote.host) {
                newStreak[key].remove = 0;
              }
            });
          }

          if (vote.action === "super") {
            Object.keys(newStreak).forEach(key => {
              newStreak[key].add =
                key === vote.host ? newStreak[key].add + 5 : 0;
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
            votingState: newVoting,
            leadingSeat: getKeyWithHighestValue(newVoting)
          });
        },

        handleHostVotingSuper: (data: IVotes) => {
          const currentTopic = get().topicId;
          const newSuperVoteLog = _cloneDeep(get().superVoteLog);

          if (!currentTopic) return;

          if (!newSuperVoteLog[currentTopic]) {
            newSuperVoteLog[currentTopic] = [];
          }

          const superVote = {
            host: data.host,
            voter: data.username
          };

          if (
            newSuperVoteLog[currentTopic].some(
              sv => sv.host === superVote.host && sv.voter === superVote.voter
            )
          ) {
            return;
          }

          newSuperVoteLog[currentTopic].push(superVote);
          set({ superVoteLog: newSuperVoteLog });
          get().handleHostVoting(data, "super");
        },

        clearHostVotes: () => {
          set({
            votes: [],
            votingState: initVotingState,
            votingStreak: initVotingStreakState,
            superVoteLog: {}
          });
        },

        clearTopicVotes: () => {
          set({
            topicVotingState: {},
            topicVotingParsed: {
              fullVotes: {},
              trueCount: 0,
              falseCount: 0,
              oneCount: 0,
              twoCount: 0,
              yesCount: 0,
              noCount: 0
            }
          });
        }
      };
    },
    {
      name: STORAGE_KEY.VOTING_USER_VOTING
    }
  )
);

export default useVotingDataStore;
