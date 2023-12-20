import {
  IVotes,
  IVoteStreaks,
  IVotingState,
  TopicVotesParsed
} from "../../types";

import { useTopicsStore, useVotingStore } from "../../dataStores";

interface IUseVotingHook {
  votes: IVotes[];
  votingState: IVotingState;
  votingStreak: IVoteStreaks;
  leadingSeat: string[];
  trueOrFalseVotes: Partial<TopicVotesParsed>;
}

const useVotingHook = (): IUseVotingHook => {
  const votingDataStore = useVotingStore(state => state);
  const topicsDataStore = useTopicsStore(state => state);

  const trueOrFalseVotesParser = () => {
    const currentTopicId = topicsDataStore?.currentTopicId;
    if (!currentTopicId) return;

    const topicVotes = votingDataStore.topicVotingState[currentTopicId];
    if (!topicVotes) return;

    return {
      trueCount: topicVotes
        ? Object.values(topicVotes).filter(value => value).length
        : 0,
      falseCount: topicVotes
        ? Object.values(topicVotes)?.filter(value => !value).length
        : 0
    };
  };

  trueOrFalseVotesParser();

  return {
    ...votingDataStore,
    trueOrFalseVotes: trueOrFalseVotesParser() || {}
  };
};

export default useVotingHook;
