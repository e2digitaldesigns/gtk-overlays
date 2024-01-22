import React from "react";
import * as Styled from "./Host.styles";
import { useSimpleTopic, useVoting } from "../../../../../hooks";
import { IntTopic } from "../../../../../globalComponents/Topics/types";

import { trueFalseVoterParser } from "../../../../../_utils/trueFalseVoterParser";
import { HostVoteEmojis, Scroller } from "../../../../../globalComponents";
import { useDataContext } from "../../../../../context";

import CONFIG from "../../config.json";

export const HostCNN: React.FC = () => {
  const { topicIndex: currentTopicIndex, topics } = useSimpleTopic();
  const { trueOrFalseVotes, votingState } = useVoting();
  const { hosts: data } = useDataContext();

  const setLiState = (index: number) => {
    if (index < currentTopicIndex) return "visited";
    if (index === currentTopicIndex) return "active";
    return "unvisited";
  };

  return (
    <Styled.HostWrapper>
      <Styled.VoteDisplay>{votingState[1]}</Styled.VoteDisplay>
      <Styled.EmojiPlacement>
        <HostVoteEmojis seatNum={1} fontSize="24px" />
      </Styled.EmojiPlacement>

      <Styled.HostNameWrapper>
        <Scroller timer={CONFIG.scrollTimers.hostLabels} transition="fade">
          {data?.[0]?.ticker?.map((ticker: string, index: number) => (
            <Styled.HostNameWrapperName key={index}>
              {ticker}
            </Styled.HostNameWrapperName>
          ))}
        </Scroller>
      </Styled.HostNameWrapper>

      <Styled.TopicDescription>
        {topics.map((topic: IntTopic, index: number) => (
          <Styled.TopicGrid key={topic._id} linkState={setLiState(index)}>
            {trueFalseVoterParser(
              topic.desc,
              trueOrFalseVotes?.trueCount,
              trueOrFalseVotes?.falseCount
            )}
          </Styled.TopicGrid>
        ))}
      </Styled.TopicDescription>
    </Styled.HostWrapper>
  );
};
