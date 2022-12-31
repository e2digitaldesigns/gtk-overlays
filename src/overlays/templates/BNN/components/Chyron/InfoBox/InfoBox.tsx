import * as React from "react";
import * as Styled from "./InfoBox.styles";

interface IntInfoBox {
  topic: any;
}
const InfoBox: React.FC<IntInfoBox> = ({ topic }) => {
  return (
    <>
      <Styled.InfoBox>
        <Styled.Title>
          {topic.name}
          <Styled.SubTitle>{topic.desc}</Styled.SubTitle>
        </Styled.Title>
      </Styled.InfoBox>
    </>
  );
};

export default InfoBox;
