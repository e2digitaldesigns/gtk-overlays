import * as React from "react";
import * as Styled from "./TopicImage.sytle";

import { useParams, useSimpleTopic } from "../../../../../hooks";
import { IntTopic, SectionsESPN } from "../../../../../types";
import useVideoPlayerDataStore from "../../../../../dataStores/useVideoPlayerDataStore/useVideoPlayerDataStore";

export const TopicImageESPN: React.FC = () => {
  const { topics, topicIndex } = useSimpleTopic();
  const { showSection } = useParams();
  const { isVideoViewable, videoSize } = useVideoPlayerDataStore();

  const hideTopicImage = isVideoViewable && videoSize === "small";

  const setLiState = (index: number) => {
    if (index < topicIndex) return "visited";
    if (index === topicIndex) return "active";
    return "unvisited";
  };

  if (!showSection(SectionsESPN.TopicImage)) return null;

  return (
    <Styled.TopicImageWrapper hideTopicImage={hideTopicImage}>
      <Styled.TopicImages>
        {topics.map((topic: IntTopic, index: number) => (
          <Styled.TopicImageLi key={topic._id} liState={setLiState(index)}>
            {!!topic?.img && (
              <Styled.TopicImageImg src={topic.img} alt={topic.name} />
            )}
          </Styled.TopicImageLi>
        ))}
      </Styled.TopicImages>
    </Styled.TopicImageWrapper>
  );
};
