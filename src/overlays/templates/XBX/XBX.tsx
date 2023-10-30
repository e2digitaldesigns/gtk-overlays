import React from "react";
import { ThemeProvider } from "styled-components";
import { useDataContext } from "../../../context";
import { useSimpleTopic } from "../../../hooks";
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
  const { topics } = useDataContext();
  const { topic } = useSimpleTopic(topics);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyle />
        <Styled.Container>
          <TimingXBX />

          <HostXBX />

          <TopicsXBX topics={topics} activeTopic={topic} />

          <ShowChatXBX />

          <DescriptionXBX activeTopic={topic} />

          <SponsorsXBX />

          <ChyronXBX />

          <ChatRankingsXBX />

          <VideoXBX topicId={topic._id} topicVideo={topic.video} />
        </Styled.Container>
      </ThemeProvider>
    </>
  );
};

export default OverlayXBX;
