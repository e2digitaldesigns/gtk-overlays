import React from "react";
import styled from "styled-components";
import { EmojiFloat } from "../../../../globalComponents";
import { useParams } from "../../../../hooks";
import { SectionsPTI } from "../../../../types";

const StyledEmojiPTI = styled.div`
  width: 1500px;
  height: 740px;
  position: absolute;

  top: 0;
  left: 10px;
  z-index: 100000;
`;

export const EmojiPTI: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsPTI.Emojis)) return null;

  return (
    <StyledEmojiPTI>
      <EmojiFloat />
    </StyledEmojiPTI>
  );
};
