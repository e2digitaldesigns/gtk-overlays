import { create, StoreApi } from "zustand";
import { persist } from "zustand/middleware";
import _cloneDeep from "lodash/cloneDeep";

import { STORAGE_KEY } from "../../types";

type ChatVote = {
  username: string;
  votes: number;
};

export interface IChatVoting {
  addVote: (data: ChatVote) => void;
  clearChatVotes: () => void;
  getVotes: () => ChatVote[];
  votes: ChatVote[];
}

const useChatVotingDataStore = create(
  persist<IChatVoting>(
    (set: StoreApi<IChatVoting>["setState"], get: StoreApi<IChatVoting>["getState"]) => {
      return {
        votes: [],

        addVote: data => {
          const newVotes = _cloneDeep(get().votes);
          const existingVoteIndex = newVotes.findIndex(vote => vote.username === data.username);

          if (existingVoteIndex !== -1) {
            newVotes[existingVoteIndex].votes += data.votes;
          } else {
            newVotes.push(data);
          }

          set({
            votes: newVotes
          });
        },

        clearChatVotes: () => {
          set({
            votes: []
          });
        },

        getVotes: () => {
          return get().votes.sort((a, b) => b.votes - a.votes);
        }
      };
    },
    {
      name: STORAGE_KEY.VOTING_CHAT_VOTING
    }
  )
);

export default useChatVotingDataStore;
