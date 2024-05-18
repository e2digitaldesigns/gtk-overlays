import React from "react";
import { useParams } from "../../../../../hooks";
import * as Styled from "./Chyron.styles";
import InfoBox from "./InfoBox/InfoBox";

import NetworkTab from "./NetworkTab/NetworkTab";
import NewsFeed from "./NewsFeed/NewsFeed";

import { SectionsESPN } from "../../../../../types";
import { Timing } from "./Timing/Timing";

const ChyronESPN: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsESPN.Chyron)) return null;

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

export default ChyronESPN;
