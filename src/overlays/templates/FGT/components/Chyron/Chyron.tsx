import React from "react";
import { useParams } from "../../../../../hooks";
import * as Styled from "./Chyron.styles";
import InfoBox from "./InfoBox/InfoBox";

import NetworkTab from "./NetworkTab/NetworkTab";
import NewsFeed from "./NewsFeed/NewsFeed";

import { SectionsFGT } from "../../../../../types";
import { Timing } from "./Timing/Timing";
import SponsorsFGT from "./sponsors/sponsors";

const Chyron: React.FC = () => {
  const { showSection } = useParams();

  return (
    <Styled.ChyronWrapper>
      <Styled.Chyron>
        {showSection(SectionsFGT.Description) && (
          <>
            <Timing />
            <NetworkTab />
            <InfoBox />
          </>
        )}

        {showSection(SectionsFGT.Sponsors) && <SponsorsFGT />}
        {showSection(SectionsFGT.NewsFeed) && <NewsFeed />}
      </Styled.Chyron>
    </Styled.ChyronWrapper>
  );
};

export default Chyron;
