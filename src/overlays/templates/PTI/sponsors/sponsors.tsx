import React from "react";
import { Scroller } from "../../../../globalComponents";
import { useParams } from "../../../../hooks";
import { SectionsPTI } from "../../../../types";
import * as Styled from "./sponsors.style";

import CONFIG from "../config.json";
import { useDataContext } from "../../../../context";

const Sponsors: React.FC = () => {
  const { sponsorImages } = useDataContext();
  const { showSection } = useParams();

  if (!showSection(SectionsPTI.Sponsors)) return null;

  return (
    <Styled.SponsorsWrapper>
      <Scroller timer={CONFIG.scrollTimers.sponsors}>
        {sponsorImages.map((image: string) => (
          <div key={image}>
            <img src={image} alt="sponsors" />
          </div>
        ))}
      </Scroller>
    </Styled.SponsorsWrapper>
  );
};

export default Sponsors;
