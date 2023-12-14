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
import { useDataContext } from "../../../context";
import { useSimpleTopic } from "../../../hooks";
import { UpNextCHL } from "./components/UpNext/UpNext";

const OverlayCHL: React.FC = () => {
  const [topicState, setTopicState] = React.useState<IntTopic>();
  const { topics } = useDataContext();
  const { isTimerPaused, topic } = useSimpleTopic(topics);

  React.useEffect(() => {
    setTopicState(topic);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyle />
        <EmojiCHL />
        <VideoCHL topicId={topicState?._id} topicVideo={topicState?.video} />
        <Styled.Container>
          <UpNextCHL activeTopic={topic} topics={topics} />
          <ShowChatCHL />
          <HeaderTab />
          <Host />

          <Chyron isTimerPaused={isTimerPaused} topic={topic} />
        </Styled.Container>
      </ThemeProvider>
    </>
  );
};

export default OverlayCHL;
