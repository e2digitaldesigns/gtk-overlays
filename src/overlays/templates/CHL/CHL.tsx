import React from "react";
import { ThemeProvider } from "styled-components";
import * as Styled from "./global.styles";
import { theme } from "./Theme/GlobalTheme";
import HeaderTab from "./components/HeaderTab/HeaderTab";
import Host from "./components/Hosts/Host";
import Chyron from "./components/Chyron/Chyron";
import { ShowChatCHL } from "./components/ShowChat/ShowChatCHL";
import { EmojiCHL } from "./components/emoji/Emoji";

import VideoCHL from "./components/Video/Video";
import { UpNextCHL } from "./components/UpNext/UpNext";
import { ChatterVoteCHL } from "./components/ChatterVote/ChatterVote";

const OverlayCHL: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyle />
        <EmojiCHL />
        <VideoCHL />
        <Styled.Container>
          <UpNextCHL />
          <ShowChatCHL />
          {/* <HeaderTab /> */}
          <ChatterVoteCHL />
          <Host />

          <Chyron />
        </Styled.Container>
      </ThemeProvider>
    </>
  );
};

export default OverlayCHL;
