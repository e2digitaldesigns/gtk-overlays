import React from "react";
import * as Styled from "./ChatterVote.styles";
import { useParams } from "../../../../../hooks";
import { ChatVote } from "../../../../../globalComponents";
import { theme } from "../../Theme/GlobalTheme";
import { SectionsCHL } from "../../../../../types";

export const ChatterVoteCHL: React.FC = () => {
  const { showSection } = useParams();
  if (!showSection(SectionsCHL.Header)) return null;
  return (
    <Styled.ChatterVoteWrapper>
      <ChatVote
        borderBottom={`2px solid #000`}
        nameBgColor="#333"
        voteBgColor={theme.colors.accent1}
      />
    </Styled.ChatterVoteWrapper>
  );
};
