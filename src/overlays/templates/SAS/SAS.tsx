import React, { useState } from "react";

import Logo from "./Components/Logo/Logo";
import SocialsSAS from "./Components/Socials/Social";
import SponsorsSAS from "./Components/sponsors/sponsors";
import TickerSAS from "./Components/Ticker/Ticker";
import Topics from "./Components/Topics/Topics";

const OverlaySAS: React.FC = () => {
  return (
    <>
      <Logo />
      <Topics />
      <SocialsSAS />
      <TickerSAS />
      <SponsorsSAS />
    </>
  );
};

export default OverlaySAS;
