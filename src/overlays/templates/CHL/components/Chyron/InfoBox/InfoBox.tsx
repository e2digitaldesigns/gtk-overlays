import * as React from "react";
import * as Styled from "./InfoBox.styles";

import { IntTopic } from "../../../../../../globalComponents/Topics/types";
import { trueFalseVoterParser } from "../../../../../../_utils/trueFalseVoterParser";
import { useVoting, useSimpleTopic } from "../../../../../../hooks";

const InfoBox: React.FC = () => {
  const { topics, topicIndex } = useSimpleTopic();
  const { trueOrFalseVotes } = useVoting();

  const setLiState = (index: number) => {
    if (index < topicIndex) return "visited";
    if (index === topicIndex) return "active";
    return "unvisited";
  };

  return (
    <Styled.InfoBox>
      {topics.map((topic: IntTopic, index: number) => (
        <Styled.TopicGrid key={topic._id} linkState={setLiState(index)}>
          {trueFalseVoterParser(
            topic.desc,
            trueOrFalseVotes?.trueCount,
            trueOrFalseVotes?.falseCount
          )}
        </Styled.TopicGrid>
      ))}
    </Styled.InfoBox>
  );
};

export default InfoBox;
