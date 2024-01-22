import React from "react";
import * as Styled from "./Voting.styles";
import { useSimpleTopic, useVoting } from "../../../../../hooks";
import {
  hasTrueFalseVoting,
  trueFalseVoterLabels
} from "../../../../../_utils/trueFalseVoterParser";

export const VotingCNN: React.FC = () => {
  const { topic: activeTopic } = useSimpleTopic();
  const { trueOrFalseVotes } = useVoting();

  const hasVoting = hasTrueFalseVoting(activeTopic?.desc);

  const falseCount = trueOrFalseVotes?.falseCount || 0;
  const trueCount = trueOrFalseVotes?.trueCount || 0;

  const labels = trueFalseVoterLabels(activeTopic?.desc);

  return (
    <Styled.VotingWrapper isVisible={hasVoting}>
      <Styled.LabelTabLeft>{labels.no}</Styled.LabelTabLeft>
      <Styled.LabelTabRight>{labels.yes}</Styled.LabelTabRight>
      <Styled.VotingContentLeft isWinning={falseCount > trueCount}>
        {falseCount}
      </Styled.VotingContentLeft>

      <Styled.VotingContentRight isWinning={falseCount < trueCount}>
        {trueCount}
      </Styled.VotingContentRight>
    </Styled.VotingWrapper>
  );
};
