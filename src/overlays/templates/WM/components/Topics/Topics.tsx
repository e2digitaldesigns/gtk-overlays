import React from "react";
import { useSimpleTopic } from "../../../../../hooks";
import * as Styled from "./Topics.style";
import { IntTopic } from "../../../../../types";

const TopicsWM: React.FC = () => {
  const { topics, topic: currentTopic } = useSimpleTopic();

  return (
    <Styled.TopicWrapper>
      {topics.map((topic: IntTopic) => (
        <Styled.TopicGrid
          isActive={currentTopic._id === topic._id}
          key={topic._id}
        >
          <div>{topic?.name || ""}</div>
          <div>{topic?.desc || ""}</div>
        </Styled.TopicGrid>
      ))}
    </Styled.TopicWrapper>
  );
};

export default TopicsWM;
