import * as React from "react";
import * as Styled from "./NetworkTab.styles";
import { MdOndemandVideo } from "react-icons/md";
import { useSimpleTopic } from "../../../../../../hooks";
import { IntTopic } from "../../../../../../globalComponents/Topics/types";

const NetworkTab: React.FC = () => {
  const { topics, topicIndex } = useSimpleTopic();

  const setLiState = (index: number) => {
    if (index < topicIndex) return "visited";
    if (index === topicIndex) return "active";
    return "unvisited";
  };

  return (
    <Styled.NetworkTab>
      {topics.map((topic: IntTopic, index: number) => (
        <Styled.TopicGrid key={topic._id} linkState={setLiState(index)}>
          {!!topic.video && (
            <MdOndemandVideo size={36} style={{ padding: "0px 5px 0 0" }} />
          )}
          {topic.name}
        </Styled.TopicGrid>
      ))}
    </Styled.NetworkTab>
  );
};

export default NetworkTab;
