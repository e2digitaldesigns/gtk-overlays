import { IVotes, IVoteStreaks, IVotingState } from "../../types";

import { useTopicsStore, useVotingStore } from "../../dataStores";

export type TopicVotesParsed = {
  trueCount: number;
  falseCount: number;
  oneCount: number;
  twoCount: number;
  yesCount: number;
  noCount: number;
};

interface IUseVotingHook {
  votes: IVotes[];
  votingState: IVotingState;
  votingStreak: IVoteStreaks;
  leadingSeat: string[];
  topicVotes: TopicVotesParsed;
}

const useVotingHook = (): IUseVotingHook => {
  const votingDataStore = useVotingStore(state => state);
  const topicsDataStore = useTopicsStore(state => state);

  const topicVotesParser = () => {
    const currentTopicId = topicsDataStore?.currentTopicId;
    if (!currentTopicId) return;

    const topicVotes = votingDataStore.topicVotingState[currentTopicId];
    if (!topicVotes) return;

    const objectValues = Object.values(topicVotes);

    return {
      trueCount: objectValues.filter(value => value === "true").length,
      falseCount: objectValues.filter(value => value === "false").length,
      oneCount: objectValues.filter(value => value === "1").length,
      twoCount: objectValues.filter(value => value === "2").length,
      yesCount: objectValues.filter(value => value === "yes").length,
      noCount: objectValues.filter(value => value === "no").length
    };
  };

  return {
    ...votingDataStore,
    topicVotes: topicVotesParser() || {
      trueCount: 0,
      falseCount: 0,
      oneCount: 0,
      twoCount: 0,
      yesCount: 0,
      noCount: 0
    }
  };
};

export default useVotingHook;
