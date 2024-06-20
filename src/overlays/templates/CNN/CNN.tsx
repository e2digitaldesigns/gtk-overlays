import React from "react";
import { ThemeProvider } from "styled-components";
import * as Styled from "./global.styles";
import { theme } from "./Theme/GlobalTheme";
import { HostCNN } from "./components/Host/Host";
import { NewsCNN } from "./components/News/News";
import { ShowChatCNN } from "./components/ShowChat/ShowChatCNN";
import { ChatDisplayCNN } from "./components/ChatDisplay/ChatDisplay";
import { SidebarCNN } from "./components/Sidebar/Sidebar";
import { VideoCNN } from "./components/Video/Video";
import { VotingCNN } from "./components/Voting/Voting";
import { TopicDescriptionCNN } from "./components/TopicDescription/TopicDescription";
import { VideoFlashBackCNN } from "./components/Video/VideoFlashBack";

const OverlayCNN: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyle />

      <Styled.Container>
        <VideoFlashBackCNN />
        <VotingCNN />
        <VideoCNN />
        <SidebarCNN />
        <HostCNN />
        <ShowChatCNN />
        <TopicDescriptionCNN />
        <ChatDisplayCNN />
        <NewsCNN />
      </Styled.Container>
    </ThemeProvider>
  );
};

export default OverlayCNN;
