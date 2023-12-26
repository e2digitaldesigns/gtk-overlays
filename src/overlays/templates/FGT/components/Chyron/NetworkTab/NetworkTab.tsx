import * as React from "react";
import * as Styled from "./NetworkTab.styles";
import { useSimpleTopic } from "../../../../../../hooks";

const NetworkTab: React.FC = () => {
  const { topic } = useSimpleTopic();
  return <Styled.NetworkTab>{topic?.name || ""}</Styled.NetworkTab>;
};

export default NetworkTab;
