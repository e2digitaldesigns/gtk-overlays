import {
  IVotes,
  IVoteStreaks,
  IVotingState,
  trueFalseVotesParsed
} from "../../types";

import { useVotingStore } from "../../dataStores";

interface IUseVotingHook {
  votes: IVotes[];
  voting: IVotingState;
  votingStreak: IVoteStreaks;
  leadingSeat: string[];
  trueOrFalseVotes: trueFalseVotesParsed;
}

const useVotingHook = (): IUseVotingHook => {
  const votingDataStore = useVotingStore(state => state);

  return {
    ...votingDataStore
  };
};

export default useVotingHook;
