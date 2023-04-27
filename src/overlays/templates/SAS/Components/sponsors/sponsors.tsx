import React from "react";
import { Scroller } from "../../../../../globalComponents";
import * as Styled from "./sponsors.style";

import CONFIG from "../../config.json";
import { useDataContext } from "../../../../../context";

const SponsorsSAS: React.FC = () => {
  const { sponsorImages } = useDataContext();

  return (
    <Styled.SponsorsWrapper>
      <Scroller timer={CONFIG.scrollTimers.sponsors}>
        {sponsorImages.map((image: string) => (
          <div key={image}>
            <img
              src={process.env.REACT_APP_CLOUD_IMAGES_USER + image}
              alt="sponsors"
            />
          </div>
        ))}
      </Scroller>
    </Styled.SponsorsWrapper>
  );
};

export default SponsorsSAS;
