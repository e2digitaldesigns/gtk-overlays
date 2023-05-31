import React from "react";

import Logo from "./Components/Logo/Logo";
import SocialsSAS from "./Components/Socials/Social";
import SponsorsSAS from "./Components/sponsors/sponsors";
import TickerSAS from "./Components/Ticker/Ticker";
import Topics from "./Components/Topics/Topics";
import ShowChatSAS from "./Components/ShowChat/ShowChat";

import { EmojiSAS } from "./Components/Emoji/Emoji";

const OverlaySAS: React.FC = () => {
  return (
    <>
      <EmojiSAS />
      <Logo />
      <Topics />
      <SocialsSAS />
      <TickerSAS />
      <SponsorsSAS />

      <ShowChatSAS />
    </>
  );
};

export default OverlaySAS;
