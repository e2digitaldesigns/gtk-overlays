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
import { IntTopic } from "../../../globalComponents/Topics/types";

const OverlayCHL: React.FC = () => {
  const [topicState, setTopicState] = React.useState<IntTopic>();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyle />
        <EmojiCHL />
        <Styled.Container>
          <VideoCHL topicId={topicState?._id} topicVideo={topicState?.video} />
          <ShowChatCHL />
          <HeaderTab />
          <Host />
          <Chyron setTopicState={setTopicState} />
        </Styled.Container>
      </ThemeProvider>
    </>
  );
};

export default OverlayCHL;
