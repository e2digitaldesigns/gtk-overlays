import React from "react";
import { Scroller } from "../../../../../../globalComponents";
import * as Styled from "./sponsors.style";

import CONFIG from "../../../config.json";
import { useDataContext } from "../../../../../../context";

const SponsorsFGT: React.FC = () => {
  const { sponsorImages } = useDataContext();

  return (
    <Styled.SponsorsWrapper>
      <Scroller timer={CONFIG.scrollTimers.sponsors} transition="fade">
        {sponsorImages.map((image: string) => (
          <div key={image}>
            <img src={image} alt="sponsors" />
          </div>
        ))}
      </Scroller>
    </Styled.SponsorsWrapper>
  );
};

export default SponsorsFGT;
