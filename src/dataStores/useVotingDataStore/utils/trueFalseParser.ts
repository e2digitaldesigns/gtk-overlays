import { STORAGE_KEY, TrueFalseVotesObj } from "../../../types";

export const trueFalseParser = (trueFalseState: TrueFalseVotesObj) => {
  const currentTopicId = window.localStorage.getItem(STORAGE_KEY.CURRENT_TOPIC);

  if (!currentTopicId) return;

  const topicVotes = trueFalseState?.[currentTopicId] || null;

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
