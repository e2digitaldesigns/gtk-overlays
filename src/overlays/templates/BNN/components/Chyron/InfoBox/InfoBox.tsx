import * as React from "react";
import { useSimpleTopic } from "../../../../../../hooks";
import * as Styled from "./InfoBox.styles";

interface IntInfoBox {}
const InfoBox: React.FC<IntInfoBox> = () => {
  const { topic } = useSimpleTopic();

  return (
    <>
      <Styled.InfoBox>
        <Styled.Title>
          {topic?.name || ""}
          <Styled.SubTitle>{topic?.desc || ""}</Styled.SubTitle>
        </Styled.Title>
      </Styled.InfoBox>
    </>
  );
};

export default InfoBox;
