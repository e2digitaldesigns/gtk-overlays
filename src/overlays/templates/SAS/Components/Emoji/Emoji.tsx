import React from "react";
import styled from "styled-components";
import { EmojiWrapper } from "../../../../../globalComponents/EmoteDisplay/Emotes";

const StyledEmojiSAS = styled.div`
  width: 1750px;
  height: 830px;
  position: absolute;

  top: 0;
  left: 80px;
  z-index: 100;
`;

export const EmojiSAS: React.FC = () => {
  return (
    <StyledEmojiSAS>
      <EmojiWrapper />
    </StyledEmojiSAS>
  );
};
