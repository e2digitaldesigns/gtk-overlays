import React from "react";
import { useSimpleTopic, useParams } from "../../../../../hooks";
import * as Styled from "./Chyron.styles";
import InfoBox from "./InfoBox/InfoBox";

import NetworkTab from "./NetworkTab/NetworkTab";
import NewsFeed from "./NewsFeed/NewsFeed";

import { useDataContext } from "../../../../../context";
import { SectionsCHL } from "../../../../../types";

const Chyron: React.FC = () => {
  const { showSection } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { topics } = useDataContext();
  const { topic } = useSimpleTopic(topics);

  if (!showSection(SectionsCHL.Chyron)) return null;

  return (
    <Styled.ChyronWrapper>
      <Styled.Chyron>
        <NetworkTab topicName={topic.name} />

        <InfoBox topicDescription={topic.desc} />
        <NewsFeed />
      </Styled.Chyron>
    </Styled.ChyronWrapper>
  );
};

export default Chyron;
