import * as React from "react";
import { useDataContext } from "../../../../../../context";
import { useSimpleTopic } from "../../../../../../hooks";
import * as Styled from "./InfoBox.styles";

interface IntInfoBox {}
const InfoBox: React.FC<IntInfoBox> = () => {
  const { topics } = useDataContext();
  const topic = useSimpleTopic(topics);

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
