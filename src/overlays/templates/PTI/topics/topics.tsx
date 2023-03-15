import React from "react";
import * as Styled from "./topics.style";
import { useDataContext } from "../../../../context";
import { Topics } from "../../../../globalComponents";
import { useParams } from "../../../../hooks";
import { SectionsPTI } from "../../../../types";

interface TopicsProps {
  setTopicDescription: (string: string) => void;
  setTopicVideoId?: (string: string) => void;
}

const OverlayTopics: React.FC<TopicsProps> = ({
  setTopicDescription,
  setTopicVideoId
}) => {
  const { topics: data } = useDataContext();
  const { showSection } = useParams();

  return (
    <Styled.TopicWrapper isVisible={showSection(SectionsPTI.Topics)}>
      <Topics
        bgColorActive="#a15004"
        bgColorNormal="rgba(16,7,39,.9)"
        bgColorClicked="rgba(16,7,39,.8)"
        bgColorClock="black"
        data={data}
        height={860}
        width={399}
        gradient="left"
        imageShow={true}
        imageHeight={220}
        imageDefault="b1b105cd-5b5c-4cfc-b8aa-80f0c9d47998.jpg"
        setTopicDescription={setTopicDescription}
        viewableTopicCount={7}
      />
    </Styled.TopicWrapper>
  );
};

export default OverlayTopics;
