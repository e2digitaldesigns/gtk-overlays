import * as React from "react";
import * as Styled from "./InfoBox.styles";

import { useSimpleTopic } from "../../../../../../hooks";
import { IntTopic } from "../../../../../../types";

const InfoBox: React.FC = () => {
  const { topics, topicIndex } = useSimpleTopic();

  const setLiState = (index: number) => {
    if (index < topicIndex) return "visited";
    if (index === topicIndex) return "active";
    return "unvisited";
  };

  return (
    <Styled.InfoBoxWrapper>
      <Styled.InfoBox>
        {topics.map((topic: IntTopic, index: number) => (
          <Styled.TopicGrid key={topic._id} linkState={setLiState(index)}>
            {topic.name}
            {/* empty from vote removal */}
          </Styled.TopicGrid>
        ))}
      </Styled.InfoBox>
    </Styled.InfoBoxWrapper>
  );
};

export default InfoBox;
