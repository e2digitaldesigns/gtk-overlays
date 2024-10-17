import { create, StoreApi } from "zustand";
import { persist } from "zustand/middleware";
import _cloneDeep from "lodash/cloneDeep";

import {
  STORAGE_KEY,
  initVotingState,
  initVotingStreakState,
  IVotes,
  IVoteStreaks,
  IVotingState,
  IntTopic,
  VotingTypes
} from "../../types";

import { getKeyWithHighestValue } from "../../_utils/getKeyWithHighestValue";

export interface SuperVote {
  host: string;
  voter: string;
}

export interface IVotingDataStore {
  topicId: string;
  votes: IVotes[];
  votingState: IVotingState;
  votingStreak: IVoteStreaks;
  leadingSeat: string[];
  superVoteLog: { [key: string]: SuperVote[] };
  winVoteLog: { [key: string]: string[] };

  setTopicId: (topic: IntTopic) => void;
  handleHostVoting: (vote: IVotes, type: VotingTypes) => void;
  handleHostVotingSuper: (data: IVotes) => void;
  handleHostVotingWin: (data: IVotes) => void;
  clearHostVotes: () => void;
}

const useVotingDataStore = create(
  persist<IVotingDataStore>(
    (set: StoreApi<IVotingDataStore>["setState"], get: StoreApi<IVotingDataStore>["getState"]) => {
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
        winVoteLog: {},

        setTopicId: (topic: IntTopic) => {
          const topicId = topic._id;
          set({ topicId: topicId });

          const superVoteLog = _cloneDeep(get().superVoteLog);
          const newSuperVoteLog = { ...superVoteLog };

          if (!newSuperVoteLog[topicId]) {
            newSuperVoteLog[topicId] = [];
          }
        },

        handleHostVoting: (vote: IVotes, type: VotingTypes) => {
          const newVotes = _cloneDeep(get().votes);
          const newVoting = _cloneDeep(get().votingState);
          const newStreak = _cloneDeep(get().votingStreak);
          const hostNum = vote.host as keyof IVotingState;

          newVotes.push(vote);

          const voteCountObj: { [key: string]: number } = {
            add: 1,
            remove: -1,
            super: 5,
            win: 10
          };

          newVoting[hostNum] = voteCountObj[type] + newVoting[hostNum];

          if ((vote.action as string) !== (VotingTypes.Remove as string)) {
            Object.keys(newStreak).forEach(key => {
              newStreak[key].add = key === vote.host ? newStreak[key].add + voteCountObj[type] : 0;
              if (key === vote.host) {
                newStreak[key].remove = 0;
              }
            });
          }

          if ((vote.action as string) === (VotingTypes.Remove as string)) {
            Object.keys(newStreak).forEach(key => {
              newStreak[key].remove = key === vote.host ? newStreak[key].remove + 1 : 0;
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
          get().handleHostVoting(data, VotingTypes.Super);
        },

        handleHostVotingWin: (data: IVotes) => {
          const currentTopic = get().topicId;
          const newWinVoteLog = _cloneDeep(get().winVoteLog);

          if (!currentTopic) return;

          if (!newWinVoteLog[currentTopic]) {
            newWinVoteLog[currentTopic] = [];
          }

          if (newWinVoteLog[currentTopic].includes(data.username)) {
            return;
          }

          newWinVoteLog[currentTopic].push(data.username);
          set({ winVoteLog: newWinVoteLog }); //    !win1
          get().handleHostVoting(data, VotingTypes.Win);
        },

        clearHostVotes: () => {
          set({
            votes: [],
            votingState: initVotingState,
            votingStreak: initVotingStreakState,
            superVoteLog: {},
            winVoteLog: {}
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
