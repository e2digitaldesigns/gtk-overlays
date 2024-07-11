import React from "react";
import styled from "styled-components";
import { EmojiFloat } from "../../../../../globalComponents";
import { useParams } from "../../../../../hooks";
import { SectionsACT } from "../../../../../types";

const StyledEmojiACT = styled.div`
  width: 1860px;
  height: 730px;
  position: absolute;

  top: 30px;
  left: 30px;
  z-index: 100000;
`;

export const EmojiACT: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsACT.Emojis)) return null;

  return (
    <StyledEmojiACT>
      <EmojiFloat />
    </StyledEmojiACT>
  );
};
