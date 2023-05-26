import { TopicStates } from "../types";

export const setTopicLiState = (
  activeTopicIndex: number,
  index: number
): TopicStates => {
  let topicState: TopicStates = TopicStates.Normal;

  if (index === activeTopicIndex) {
    topicState = TopicStates.Active;
  }

  if (index < activeTopicIndex) {
    topicState = TopicStates.Clicked;
  }

  return topicState;
};
