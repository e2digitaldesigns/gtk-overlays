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

  console.log("activeTopic", activeTopic);

  const hasLabelVoting = activeTopic?.votingOptions?.length === 2;
  const hasVoting = hasLabelVoting || hasTrueFalseVoting(activeTopic?.desc);

  const falseCount = trueOrFalseVotes?.falseCount || 0;
  const trueCount = trueOrFalseVotes?.trueCount || 0;

  const labels = trueFalseVoterLabels(activeTopic?.desc);

  return (
    <Styled.VotingWrapper isVisible={hasVoting}>
      <Styled.LabelTabLeft>
        {hasLabelVoting ? activeTopic.votingOptions[0].label : labels.yes}
      </Styled.LabelTabLeft>

      <Styled.VotingContentLeft isWinning={falseCount > trueCount}>
        {trueCount}
      </Styled.VotingContentLeft>

      <Styled.LabelTabRight>
        {hasLabelVoting ? activeTopic.votingOptions[1].label : labels.no}
      </Styled.LabelTabRight>

      <Styled.VotingContentRight isWinning={falseCount < trueCount}>
        {falseCount}
      </Styled.VotingContentRight>
    </Styled.VotingWrapper>
  );
};
