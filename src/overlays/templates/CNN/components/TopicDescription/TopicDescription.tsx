import React from "react";
import * as Styled from "./TopicDescription.styles";
import { useParams, useSimpleTopic, useVoting } from "../../../../../hooks";

import { topicVoterParser } from "../../../../../_utils/trueFalseVoterParser";

import { IntTopic, SectionsCNN } from "../../../../../types";

export const TopicDescriptionCNN: React.FC = () => {
  const { topicIndex: currentTopicIndex, topics } = useSimpleTopic();
  const { topicVotes } = useVoting();

  const setLiState = (index: number) => {
    if (index < currentTopicIndex) return "visited";
    if (index === currentTopicIndex) return "active";
    return "unvisited";
  };

  const { showSection } = useParams();
  if (!showSection(SectionsCNN.Description)) return null;

  return (
    <Styled.TopicDescriptionWrapper>
      {topics.map((topic: IntTopic, index: number) => (
        <Styled.TopicGrid
          key={topic._id}
          linkState={setLiState(index)}
          hasImage={!!topic?.img}
        >
          {!!topic?.img && (
            <Styled.TopicImage>
              <img src={topic.img} alt={topic.name} />
            </Styled.TopicImage>
          )}

          <Styled.TopicDescription hasImage={!!topic?.img}>
            {topicVoterParser(topic.desc, topicVotes)}
          </Styled.TopicDescription>
        </Styled.TopicGrid>
      ))}
    </Styled.TopicDescriptionWrapper>
  );
};
