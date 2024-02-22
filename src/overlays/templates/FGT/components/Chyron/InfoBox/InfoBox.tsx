import * as React from "react";
import * as Styled from "./InfoBox.styles";
import { IntTopic } from "../../../../../../globalComponents/Topics/types";
import { topicVoterParser } from "../../../../../../_utils/trueFalseVoterParser";
import { useVoting, useSimpleTopic } from "../../../../../../hooks";

const InfoBox: React.FC = () => {
  const { topicIndex: currentTopicIndex, topics } = useSimpleTopic();

  const { topicVotes } = useVoting();

  const setLiState = (index: number) => {
    if (index < currentTopicIndex) return "visited";
    if (index === currentTopicIndex) return "active";
    return "unvisited";
  };

  return (
    <>
      <Styled.InfoBox>
        {topics.map((topic: IntTopic, index: number) => (
          <Styled.TopicGrid key={topic._id} linkState={setLiState(index)}>
            {topicVoterParser(topic.desc, topicVotes)}
          </Styled.TopicGrid>
        ))}
      </Styled.InfoBox>
    </>
  );
};

export default InfoBox;
