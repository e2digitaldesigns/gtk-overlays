import React from "react";
import * as Styled from "./CamHolder.styles";
import { useSimpleTopic } from "../../../../../../hooks";

export const CamHolderCNN: React.FC = () => {
  const { topic: activeTopic } = useSimpleTopic();

  return <Styled.CamHolderCNNWrapper hasVideo={!!activeTopic.video} />;
};
