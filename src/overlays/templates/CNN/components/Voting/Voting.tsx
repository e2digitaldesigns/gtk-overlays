import React from "react";
import * as Styled from "./Voting.styles";
import { useSimpleTopic, useVoting } from "../../../../../hooks";

export const VotingCNN: React.FC = () => {
  const { topic: activeTopic } = useSimpleTopic();
  const { topicVotes } = useVoting();

  const hasTopicVoting = activeTopic?.votingOptions?.length === 2;

  const votesMap: { [key: string]: number } = {
    true: topicVotes.trueCount,
    false: topicVotes.falseCount,
    "1": topicVotes.oneCount,
    "2": topicVotes.twoCount,
    yes: topicVotes.yesCount,
    no: topicVotes.noCount
  };

  const voteCount1 = votesMap?.[activeTopic?.votingOptions?.[0]?.value] || 0;
  const voteCount2 = votesMap?.[activeTopic?.votingOptions?.[1]?.value] || 0;

  return (
    <Styled.VotingWrapper isVisible={hasTopicVoting}>
      <Styled.LabelTabLeft>
        {activeTopic?.votingOptions?.[0]?.label}
      </Styled.LabelTabLeft>

      <Styled.VotingContentLeft isWinning={voteCount1 > voteCount2}>
        {voteCount1}
      </Styled.VotingContentLeft>

      <Styled.LabelTabRight>
        {activeTopic?.votingOptions?.[1]?.label}
      </Styled.LabelTabRight>

      <Styled.VotingContentRight isWinning={voteCount1 < voteCount2}>
        {voteCount2}
      </Styled.VotingContentRight>
    </Styled.VotingWrapper>
  );
};
