import { IVotes, IVoteStreaks, IVotingState } from "../../types";

import { useTopicsStore, useVotingStore } from "../../dataStores";

export type TrueVotesParsed = {
  trueCount: number;
  trueCountPercentage: string;
  falseCount: number;
  falseCountPercentage: string;
};

interface IUseVotingHook {
  votes: IVotes[];
  votingState: IVotingState;
  votingStreak: IVoteStreaks;
  leadingSeat: string[];
  trueOrFalseVotes: Partial<TrueVotesParsed>;
}

const useVotingHook = (): IUseVotingHook => {
  const votingDataStore = useVotingStore(state => state);
  const topicsDataStore = useTopicsStore(state => state);

  const trueOrFalseVotesParser = () => {
    const currentTopicId = topicsDataStore?.currentTopicId;
    if (!currentTopicId) return;

    const topicVotes = votingDataStore.topicVotingState[currentTopicId];
    if (!topicVotes) return;

    const totalVotes = Object.values(topicVotes).length;
    const trueVotes = Object.values(topicVotes).filter(value => value).length;
    const falseVotes = Object.values(topicVotes).filter(value => !value).length;

    return {
      trueCount: trueVotes,
      trueCountPercentage: ((trueVotes / totalVotes) * 100).toFixed(2),

      falseCount: falseVotes,
      falseCountPercentage: ((falseVotes / totalVotes) * 100).toFixed(2)
    };
  };

  trueOrFalseVotesParser();

  return {
    ...votingDataStore,
    trueOrFalseVotes: trueOrFalseVotesParser() || {}
  };
};

export default useVotingHook;
