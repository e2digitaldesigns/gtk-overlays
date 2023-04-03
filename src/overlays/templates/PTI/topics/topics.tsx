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
  const { topics: data, logo } = useDataContext();
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
        imageDefault={logo}
        imageShow={true}
        imageHeight={220}
        setTopicDescription={setTopicDescription}
        viewableTopicCount={7}
      />
    </Styled.TopicWrapper>
  );
};

export default OverlayTopics;
