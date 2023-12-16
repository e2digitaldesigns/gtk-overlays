import React from "react";
import { ThemeProvider } from "styled-components";
import * as Styled from "./global.styles";
import { theme } from "./Theme/GlobalTheme";
import ChyronXBX from "./components/chyron/chyron";
import DescriptionXBX from "./components/description/description";
import SponsorsXBX from "./components/sponsors/sponsors";
import { TopicsXBX } from "./components/topics/topics";
import HostXBX from "./components/host/hosts";
import ChatRankingsXBX from "./components/ChatRankings/ChatRakings";
import VideoXBX from "./components/video/video";
import { TimingXBX } from "./components/Timing/Timing";
import { ShowChatXBX } from "./components/userChat/userChat";

const OverlayXBX: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyle />
        <Styled.Container>
          <TimingXBX />

          <HostXBX />

          <TopicsXBX />

          <ShowChatXBX />

          <DescriptionXBX />

          <SponsorsXBX />

          <ChyronXBX />

          <ChatRankingsXBX />

          <VideoXBX />
        </Styled.Container>
      </ThemeProvider>
    </>
  );
};

export default OverlayXBX;
