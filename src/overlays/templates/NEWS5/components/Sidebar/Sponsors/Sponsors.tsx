import React from "react";
import * as Styled from "./Sponsors.styles";

import { Scroller } from "../../../../../../globalComponents";
import { useParams } from "../../../../../../hooks";
import { SectionsXBX } from "../../../../../../types";

import CONFIG from "../../../config.json";
import { useDataContext } from "../../../../../../context";

export const SponsorsCNN: React.FC = () => {
  const { sponsorImages } = useDataContext();
  const { showSection } = useParams();

  if (!showSection(SectionsXBX.Sponsors)) return null;

  return (
    <Styled.SponsorWrapper>
      <Scroller timer={CONFIG.scrollTimers.sponsors} transition="fade">
        {sponsorImages.map((image: string) => (
          <div key={image}>
            <img src={image} alt="sponsors" />
          </div>
        ))}
      </Scroller>
    </Styled.SponsorWrapper>
  );
};
