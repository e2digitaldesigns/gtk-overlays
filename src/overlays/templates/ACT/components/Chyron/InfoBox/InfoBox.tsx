import * as React from "react";
import * as Styled from "./InfoBox.styles";

import { topicVoterParser } from "../../../../../../_utils/trueFalseVoterParser";
import { useVoting, useSimpleTopic } from "../../../../../../hooks";
import { IntTopic } from "../../../../../../types";

const InfoBox: React.FC = () => {
  const { topics, topicIndex } = useSimpleTopic();
  const { topicVotes } = useVoting();

  const setLiState = (index: number) => {
    if (index < topicIndex) return "visited";
    if (index === topicIndex) return "active";
    return "unvisited";
  };

  return (
    <Styled.InfoBoxWrapper>
      <Styled.InfoBox>
        {topics.map((topic: IntTopic, index: number) => (
          <Styled.TopicGrid key={topic._id} linkState={setLiState(index)}>
            {topicVoterParser(topic.desc, topicVotes)}
          </Styled.TopicGrid>
        ))}
      </Styled.InfoBox>
    </Styled.InfoBoxWrapper>
  );
};

export default InfoBox;
