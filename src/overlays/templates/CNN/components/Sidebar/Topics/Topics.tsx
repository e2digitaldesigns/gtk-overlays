import React from "react";
import * as Styled from "./Topics.styles";
import { TopicsNormalCNN } from "./TopicNormal";

export const TopicsCNN: React.FC = () => {
  return (
    <Styled.TopicsWrapper>
      <TopicsNormalCNN />
    </Styled.TopicsWrapper>
  );
};
