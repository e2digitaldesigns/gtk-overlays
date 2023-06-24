import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

import Chyron from "./chyron/chyron";
import Description from "./description/description";
import Logo from "./logo/logo";
import Sponsors from "./sponsors/sponsors";
import Topics from "./topics/topics";
import Hosts from "./hosts/Host";
import { ShowChatPTI } from "./ShowChatPTI/ShowChatPTI";
import { EmojiPTI } from "./emoji/Emoji";
import ChatRankingsPTI from "./ChatRankings/ChatRakings";

const OverlayPTI: React.FC = () => {
  const [topicDescription, setTopicDescription] = React.useState<string>("");
  const [topicVideoId, setTopicVideoId] = React.useState<string>("");

  console.log({ topicVideoId });

  return (
    <>
      <ThemeProvider theme={theme}>
        <ChatRankingsPTI />
        <EmojiPTI />
        <Chyron />
        <Description topicDescription={topicDescription} />
        <Logo />
        <Sponsors />

        <Topics
          setTopicDescription={setTopicDescription}
          setTopicVideoId={setTopicVideoId}
        />

        <ShowChatPTI />

        <Hosts />
      </ThemeProvider>
    </>
  );
};

export default OverlayPTI;
