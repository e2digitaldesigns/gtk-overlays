import { STORAGE_KEY } from "../../types";

export const setStorageData = (currentTopicId: string) => {
  window.localStorage.setItem(
    STORAGE_KEY.CURRENT_TOPIC,
    JSON.stringify(currentTopicId)
  );

  const topicVoting = window.localStorage.getItem(
    STORAGE_KEY.TOPIC_VOTING_COUNT
  );

  const topicVotingTrueFalse = window.localStorage.getItem(
    STORAGE_KEY.TOPIC_VOTING_TRUE_FALSE
  );

  if (topicVoting) {
    const voting = JSON.parse(topicVoting);

    if (!voting?.[currentTopicId]) {
      window.localStorage.setItem(
        STORAGE_KEY.TOPIC_VOTING_COUNT,
        JSON.stringify({ ...voting, [currentTopicId]: [] })
      );
    }
  } else {
    window.localStorage.setItem(
      STORAGE_KEY.TOPIC_VOTING_COUNT,
      JSON.stringify({ [currentTopicId]: [] })
    );
  }

  if (topicVotingTrueFalse) {
    const voting = JSON.parse(topicVotingTrueFalse);

    if (!voting?.[currentTopicId]) {
      window.localStorage.setItem(
        STORAGE_KEY.TOPIC_VOTING_TRUE_FALSE,
        JSON.stringify({ ...voting, [currentTopicId]: {} })
      );
    }
  } else {
    window.localStorage.setItem(
      STORAGE_KEY.TOPIC_VOTING_TRUE_FALSE,
      JSON.stringify({ [currentTopicId]: {} })
    );
  }
};
