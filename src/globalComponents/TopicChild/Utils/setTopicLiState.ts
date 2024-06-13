import { IntTopic, TopicStates } from "../../../types";

export const setTopicLiState = (
  topics: IntTopic[],
  activeParentTopic: IntTopic | undefined,
  activeTopicIndex: number,
  viewableTopicCount: number,
  index: number
): TopicStates => {
  let topicState: TopicStates = TopicStates.Normal;

  const activeTopic = topics[index];
  const remainingTopics = topics.length - index + 1;

  if (index === activeTopicIndex) {
    topicState = TopicStates.Active;
  }

  if (index < activeTopicIndex) {
    topicState = TopicStates.Clicked;
  }

  if (topics[activeTopicIndex].parentId === activeTopic._id) {
    topicState = TopicStates.Active;
  }

  if (activeParentTopic?._id === activeTopic.parentId) {
    if (index < activeTopicIndex && remainingTopics > viewableTopicCount) {
      topicState = TopicStates.Hidden;
    }
  }

  return topicState;
};
