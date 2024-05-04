import React from "react";
import * as Styled from "./Topics.styles";
import { TopicsNormalCNN } from "./TopicNormal";
import { TopicsSmallCNN } from "./TopicSmall";

export const TopicsCNN: React.FC = () => {
  return (
    <Styled.TopicsWrapper>
      <TopicsSmallCNN />
      <TopicsNormalCNN />
    </Styled.TopicsWrapper>
  );
};
