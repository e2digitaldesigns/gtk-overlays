import * as React from "react";
import * as Styled from "./NetworkTab.styles";

interface INetworkTab {
  topicName: string;
}

const NetworkTab: React.FC<INetworkTab> = ({ topicName }) => {
  return <Styled.NetworkTab>{topicName}</Styled.NetworkTab>;
};

export default NetworkTab;
