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
import { TopicVotingESPN } from "./Components/Voting/Voting";

const OverlayESPN: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyle />
        <Styled.Container>
          <TopicVotingESPN />
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

// http://localhost:3001?uid=640bef8f88f7663004024d65&tid=6647f6f64a90eaac951773c6&chyron=1&host_1=1&host_2=1&host_3=1&emojis=1&video=1

// TODO: Adjust all positions (user chat)
// TODO: Clean message for amersand
// TODO: Move Voting emojis up
// TODO:
