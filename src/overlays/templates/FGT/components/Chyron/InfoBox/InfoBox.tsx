import * as React from "react";
import * as Styled from "./InfoBox.styles";

import { useSimpleTopic } from "../../../../../../hooks";
import { IntTopic } from "../../../../../../types";

const InfoBox: React.FC = () => {
  const { topicIndex: currentTopicIndex, topics } = useSimpleTopic();

  const setLiState = (index: number) => {
    if (index < currentTopicIndex) return "visited";
    if (index === currentTopicIndex) return "active";
    return "unvisited";
  };

  return (
    <>
      <Styled.InfoBox>
        {topics.map((topic: IntTopic, index: number) => (
          <Styled.TopicGrid key={topic._id} linkState={setLiState(index)}>
            {topic.name}
            {/* empty from vote removal */}
          </Styled.TopicGrid>
        ))}
      </Styled.InfoBox>
    </>
  );
};

export default InfoBox;
