import React from "react";
import styled from "styled-components";
import { EmojiFloat } from "../../../../../globalComponents";
import { useParams } from "../../../../../hooks";
import { SectionsBNN } from "../../../../../types";

const StyledEmojiBNN = styled.div`
  width: 1720px;
  height: 880px;
  position: absolute;

  top: 100px;
  left: 100px;
  z-index: 100000;
`;

export const EmojiBNN: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsBNN.Emojis)) return null;

  return (
    <StyledEmojiBNN>
      <EmojiFloat />
    </StyledEmojiBNN>
  );
};
