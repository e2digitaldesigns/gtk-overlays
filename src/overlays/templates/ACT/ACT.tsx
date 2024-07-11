import React from "react";
import { ThemeProvider } from "styled-components";
import * as Styled from "./global.styles";
import { theme } from "./Theme/GlobalTheme";
import HeaderTab from "./components/HeaderTab/HeaderTab";
import Host from "./components/Hosts/Host";
import Chyron from "./components/Chyron/Chyron";
import { ShowChatACT } from "./components/ShowChat/ShowChatCHL";
import { EmojiACT } from "./components/emoji/Emoji";

import VideoACT from "./components/Video/Video";
import { UpNextACT } from "./components/UpNext/UpNext";

const OverlayACT: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyle />
        <EmojiACT />
        <VideoACT />
        <Styled.Container>
          <UpNextACT />
          <ShowChatACT />
          <HeaderTab />
          <Host />

          <Chyron />
        </Styled.Container>
      </ThemeProvider>
    </>
  );
};

export default OverlayACT;
