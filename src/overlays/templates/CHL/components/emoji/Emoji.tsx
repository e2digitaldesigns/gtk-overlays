import React from "react";
import styled from "styled-components";
import { EmojiFloat } from "../../../../../globalComponents";
import { useParams } from "../../../../../hooks";
import { SectionsPTI } from "../../../../../types";

const StyledEmojiCHL = styled.div`
  width: 1860px;
  height: 730px;
  position: absolute;

  top: 30px;
  left: 30px;
  z-index: 100000;
`;

export const EmojiCHL: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsPTI.Emojis)) return null;

  return (
    <StyledEmojiCHL>
      <EmojiFloat />
    </StyledEmojiCHL>
  );
};
