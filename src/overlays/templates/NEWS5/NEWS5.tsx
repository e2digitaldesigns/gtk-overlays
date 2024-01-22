import React from "react";
import { ThemeProvider } from "styled-components";
import * as Styled from "./global.styles";
import { theme } from "./Theme/GlobalTheme";
import { HostCNN } from "./components/Host/Host";
import { NewsCNN } from "./components/News/News";
import { ShowChatCNN } from "./components/ShowChat/ShowChatCNN";
import { BoxesCNN } from "./components/Boxes/Boxes";
import { SidebarCNN } from "./components/Sidebar/Sidebar";
import { VideoCNN } from "./components/Video/Video";
import { VotingCNN } from "./components/Voting/Voting";

const OverlayNS5: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyle />

      <Styled.Container>
        <VotingCNN />
        <VideoCNN />
        <SidebarCNN />
        <HostCNN />
        <ShowChatCNN />
        <NewsCNN />
        <BoxesCNN />
      </Styled.Container>
    </ThemeProvider>
  );
};

export default OverlayNS5;
