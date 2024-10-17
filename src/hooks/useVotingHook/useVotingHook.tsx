import { IVotes, IVoteStreaks, IVotingState } from "../../types";

import { useVotingStore } from "../../dataStores";

interface IUseVotingHook {
  votes: IVotes[];
  votingState: IVotingState;
  votingStreak: IVoteStreaks;
  leadingSeat: string[];
}

const useVotingHook = (): IUseVotingHook => {
  const votingDataStore = useVotingStore(state => state);

  return {
    ...votingDataStore
  };
};

export default useVotingHook;
