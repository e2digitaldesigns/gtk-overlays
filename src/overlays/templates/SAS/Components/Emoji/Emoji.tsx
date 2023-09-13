import React from "react";
import styled from "styled-components";
import { EmojiFloat } from "../../../../../globalComponents";

import { useParams } from "../../../../../hooks";
import { SectionsSAS } from "../../../../../types";

const StyledEmojiSAS = styled.div`
  width: 1750px;
  height: 820px;
  position: absolute;

  top: 0;
  left: 80px;
  z-index: 100;
`;

export const EmojiSAS: React.FC = () => {
  const { showSection } = useParams();
  if (!showSection(SectionsSAS.Emojis)) return null;

  return (
    <StyledEmojiSAS>
      <EmojiFloat />
    </StyledEmojiSAS>
  );
};
