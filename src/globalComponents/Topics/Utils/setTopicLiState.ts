import { TopicStates, IntTopic } from "../types";

export const setTopicLiState = (
  activeChildIndex: number,
  activeParentId: string,
  activeTopicIndex: number,
  data: IntTopic[],
  index: number,
  viewableTopicCount: number
): TopicStates => {
  let topicState: TopicStates = TopicStates.Normal;
  const totalTopicCount = data.length;

  if (index === activeTopicIndex) {
    topicState = TopicStates.Active;
  }

  if (index === activeChildIndex + activeTopicIndex + 1) {
    topicState = TopicStates.Active;
  }

  if (index < activeTopicIndex) {
    topicState = TopicStates.Clicked;
  }

  if (activeChildIndex >= 0 && activeParentId !== data[index]._id) {
    if (index < activeChildIndex + activeTopicIndex + 1) {
      topicState = TopicStates.Clicked;
    }
  }

  if (
    topicState === TopicStates.Clicked &&
    data[index].parentId !== data[activeTopicIndex]._id
  ) {
    if (totalTopicCount - index > viewableTopicCount) {
      topicState = TopicStates.Hidden;
    }
  }

  return topicState;
};
