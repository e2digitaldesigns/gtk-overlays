import * as React from "react";
import * as Styled from "./InfoBox.styles";
import { useDataContext } from "../../../../../../context";
import { IntTopic } from "../../../../../../globalComponents/Topics/types";
import { trueFalseVoterParser } from "../../../../../../_utils/trueFalseVoterParser";

interface IntInfoBox {
  currenTopicId: string;
  trueOrFalseVotes?: any;
}
const InfoBox: React.FC<IntInfoBox> = ({ currenTopicId, trueOrFalseVotes }) => {
  const { topics } = useDataContext();

  const currentTopicIndex = topics.findIndex(
    (topic: IntTopic) => topic._id === currenTopicId || ""
  );

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
            {trueFalseVoterParser(
              topic.desc,
              trueOrFalseVotes.trueCount,
              trueOrFalseVotes.falseCount
            )}
          </Styled.TopicGrid>
        ))}
      </Styled.InfoBox>
    </>
  );
};

export default InfoBox;
