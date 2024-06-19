import React from "react";
import * as Styled from "./Sponsors.styles";
import { Scroller } from "../../../../../globalComponents";
import { useParams } from "../../../../../hooks";
import { SectionsCNN } from "../../../../../types";

import CONFIG from "../../config.json";
import { useDataContext } from "../../../../../context";

export const SponsorsCNN: React.FC = () => {
  const { showSection } = useParams();
  const { sponsorImages } = useDataContext();

  if (!showSection(SectionsCNN.Sponsors)) return null;

  return (
    <>
      <Styled.Box>
        <Scroller timer={CONFIG.scrollTimers.sponsors}>
          {sponsorImages.map((image: string) => (
            <div key={image}>
              <img src={image} alt="sponsors" />
            </div>
          ))}
        </Scroller>
      </Styled.Box>
    </>
  );
};
