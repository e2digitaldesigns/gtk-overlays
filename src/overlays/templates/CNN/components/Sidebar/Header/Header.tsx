import React from "react";
import * as Styled from "./Header.styles";

export const HeaderCNN: React.FC = () => {
  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderLeft> ICT Today </Styled.HeaderLeft>
      <Styled.HeaderRight> On Demand </Styled.HeaderRight>
    </Styled.HeaderWrapper>
  );
};
