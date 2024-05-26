import React from "react";
import * as Styled from "./Voting.styles";
import { TopicVotingBlock } from "../../../../../globalComponents";
import { theme } from "../../Theme/GlobalTheme";

export const TopicVotingESPN: React.FC = () => {
  return (
    <Styled.VotingWrapper>
      <TopicVotingBlock
        accentColor={theme.colors.accent1}
        bgColor={theme.colors.bg1}
      />
    </Styled.VotingWrapper>
  );
};
