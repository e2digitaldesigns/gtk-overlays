import { STORAGE_KEY, TopicVotesObj } from "../../../types";

export const trueFalseParser = (trueFalseState: TopicVotesObj) => {
  let currentTopicId = window.localStorage.getItem(STORAGE_KEY.CURRENT_TOPIC);
  currentTopicId = currentTopicId && JSON.parse(currentTopicId);
  if (!currentTopicId) return;

  const topicVotes =
    trueFalseState?.[currentTopicId as keyof TopicVotesObj] || null;

  const obj = {
    fullVotes: topicVotes || {},
    trueCount: topicVotes
      ? Object.values(topicVotes).filter(value => value).length
      : 0,

    falseCount: topicVotes
      ? Object.values(topicVotes)?.filter(value => !value).length
      : 0
  };

  return obj;
};
