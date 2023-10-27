import React from "react";
import * as Styled from "./description.style";
import { SectionsXBX } from "../../../../../types";
import { useParams, useTopicImage } from "../../../../../hooks";
import { IntTopic } from "../../../../../globalComponents/Topics/types";

import { useDataContext } from "../../../../../context";

interface DescriptionProps {
  activeTopic: IntTopic;
}
const DescriptionXBX: React.FC<DescriptionProps> = ({ activeTopic }) => {
  const { showSection } = useParams();
  const { topics } = useDataContext();
  const { topicImage } = useTopicImage();

  const currentTopicIndex = topics.findIndex(
    (topic: IntTopic) => topic._id === activeTopic._id || ""
  );

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
