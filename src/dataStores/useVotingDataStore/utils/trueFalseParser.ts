import { STORAGE_KEY, TrueFalseVotesObj } from "../../../types";

export const trueFalseParser = (trueFalseState: TrueFalseVotesObj) => {
  let currentTopicId = window.localStorage.getItem(STORAGE_KEY.CURRENT_TOPIC);
  currentTopicId = currentTopicId && JSON.parse(currentTopicId);
  if (!currentTopicId) return;

  console.log("currentTopicId", currentTopicId);

  const topicVotes =
    trueFalseState?.[currentTopicId as keyof TrueFalseVotesObj] || null;

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
