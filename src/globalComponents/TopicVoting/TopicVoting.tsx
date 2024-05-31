import React from "react";
import * as Styled from "./TopicVoting.styles";
import { useSimpleTopic, useVoting } from "../../hooks";

interface TopicVotingProps {
  accentColor?: string;
  bgColor?: string;
  fontColor?: string;
}

const TopicVotingBlock: React.FC<TopicVotingProps> = ({
  accentColor = "blue",
  bgColor = "red",
  fontColor = "white"
}) => {
  const { topic: activeTopic } = useSimpleTopic();
  const { topicVotes } = useVoting();

  const topicHasVoting = activeTopic?.votingOptions?.length === 2;

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
    <Styled.VotingWrapper
      bgColor={bgColor}
      fontColor={fontColor}
      isVisible={topicHasVoting}
    >
      <Styled.LabelTabLeft accentColor={accentColor}>
        {activeTopic?.votingOptions?.[0]?.label}
      </Styled.LabelTabLeft>

      <Styled.VotingContentLeft
        accentColor={accentColor}
        isWinning={voteCount1 > voteCount2}
      >
        {voteCount1}
      </Styled.VotingContentLeft>

      <Styled.LabelTabRight accentColor={accentColor}>
        {activeTopic?.votingOptions?.[1]?.label}
      </Styled.LabelTabRight>

      <Styled.VotingContentRight
        accentColor={accentColor}
        isWinning={voteCount1 < voteCount2}
      >
        {voteCount2}
      </Styled.VotingContentRight>
    </Styled.VotingWrapper>
  );
};

export default TopicVotingBlock;
