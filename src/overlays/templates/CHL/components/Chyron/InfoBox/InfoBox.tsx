import * as React from "react";
import * as Styled from "./InfoBox.styles";

interface IntInfoBox {
  topicDescription: string;
}
const InfoBox: React.FC<IntInfoBox> = ({ topicDescription }) => {
  return (
    <>
      <Styled.InfoBox>{topicDescription}</Styled.InfoBox>
    </>
  );
};

export default InfoBox;
