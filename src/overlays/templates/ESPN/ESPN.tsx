import React from "react";
import { ThemeProvider } from "styled-components";

import * as Styled from "./global.styles";
import { theme } from "./Theme/GlobalTheme";
import { UpNextESPN } from "./Components/UpNext/UpNext";
import ChyronESPN from "./Components/Chyron/Chyron";
import { ShowChatESPN } from "./Components/ShowChat/ShowChatEspn";
import { HeaderTabESPN } from "./Components/HeaderTab/HeaderTab";
import { HostsESPN } from "./Components/Hosts/Hosts";
import { TopicImageESPN } from "./Components/TopicImage/TopicImage";
import { VideoESPN } from "./Video/Video";

const OverlayESPN: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyle />
        <Styled.Container>
          <UpNextESPN />
          <ShowChatESPN />
          <HeaderTabESPN />
          <VideoESPN />

          <TopicImageESPN />

          <HostsESPN />

          <ChyronESPN />
        </Styled.Container>
      </ThemeProvider>
    </>
  );
};

export default OverlayESPN;
