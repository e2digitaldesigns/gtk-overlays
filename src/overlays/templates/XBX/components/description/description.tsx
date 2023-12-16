import React from "react";
import * as Styled from "./description.style";
import { SectionsXBX } from "../../../../../types";
import { useParams, useSimpleTopic, useTopicImage } from "../../../../../hooks";
import { IntTopic } from "../../../../../globalComponents/Topics/types";

const DescriptionXBX: React.FC = () => {
  const { topics, topicIndex: currentTopicIndex } = useSimpleTopic();
  const { showSection } = useParams();
  const { topicImage } = useTopicImage();

  const setLiState = (index: number) => {
    if (index < currentTopicIndex) return "visited";
    if (index === currentTopicIndex) return "active";
    return "unvisited";
  };

  return (
    <>
      <Styled.DescriptionImageWrapperMain
        isVisible={showSection(SectionsXBX.Description)}
      >
        {topics.map((topic: IntTopic, index: number) => (
          <Styled.ImageDescriptionWrapper
            key={topic._id}
            linkState={setLiState(index)}
          >
            {topicImage(topic.img)}
          </Styled.ImageDescriptionWrapper>
        ))}
      </Styled.DescriptionImageWrapperMain>

      <Styled.DescriptionWrapperMain
        isVisible={showSection(SectionsXBX.Description)}
      >
        {topics.map((topic: IntTopic, index: number) => (
          <Styled.DescriptionWrapper
            key={topic._id}
            linkState={setLiState(index)}
          >
            <Styled.Name>{topic.name}</Styled.Name>
            <Styled.Desc>{topic.desc}</Styled.Desc>
          </Styled.DescriptionWrapper>
        ))}
      </Styled.DescriptionWrapperMain>
    </>
  );
};

export default DescriptionXBX;
