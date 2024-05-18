import * as React from "react";
import * as Styled from "./TopicImage.sytle";
import { IntTopic } from "../../../../../globalComponents/Topics/types";
import { useParams, useSimpleTopic } from "../../../../../hooks";
import { SectionsESPN } from "../../../../../types";

export const TopicImageESPN: React.FC = () => {
  const { topics, topicIndex } = useSimpleTopic();
  const { showSection } = useParams();

  const setLiState = (index: number) => {
    if (index < topicIndex) return "visited";
    if (index === topicIndex) return "active";
    return "unvisited";
  };

  if (!showSection(SectionsESPN.TopicImage)) return null;

  return (
    <Styled.TopicImageWrapper>
      <Styled.TopicImage>
        {topics.map((topic: IntTopic, index: number) => (
          <Styled.TopicImageLi key={topic._id} liState={setLiState(index)}>
            <Styled.TopicImageImg src={topic.img} alt={topic.name} />
          </Styled.TopicImageLi>
        ))}
      </Styled.TopicImage>
    </Styled.TopicImageWrapper>
  );
};
