import React from "react";
import { useParams } from "../../../../../hooks";
import * as Styled from "./Chyron.styles";
import InfoBox from "./InfoBox/InfoBox";

import NetworkTab from "./NetworkTab/NetworkTab";
import NewsFeed from "./NewsFeed/NewsFeed";

import { SectionsCHL } from "../../../../../types";
import { Timing } from "./Timing/Timing";

const Chyron: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsCHL.Chyron)) return null;

  return (
    <Styled.ChyronWrapper>
      <Styled.Chyron>
        <Timing />
        <NetworkTab />

        <InfoBox />
        <NewsFeed />
      </Styled.Chyron>
    </Styled.ChyronWrapper>
  );
};

export default Chyron;
