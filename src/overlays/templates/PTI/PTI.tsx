import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

import Chyron from "./chyron/chyron";
import Description from "./description/description";
import Sponsors from "./sponsors/sponsors";
import Topics from "./topics/topics";
import Hosts from "./hosts/Host";
import { ShowChatPTI } from "./ShowChatPTI/ShowChatPTI";
import { EmojiPTI } from "./emoji/Emoji";
import ChatRankingsPTI from "./ChatRankings/ChatRakings";
import VideoPTI from "./video/video";
import { IntTopic } from "../../../globalComponents/Topics/types";

const OverlayPTI: React.FC = () => {
  const [topicState, setTopicState] = React.useState<IntTopic>();

  return (
    <>
      <ThemeProvider theme={theme}>
        <VideoPTI topicId={topicState?._id} topicVideo={topicState?.video} />
        <ChatRankingsPTI />
        <EmojiPTI />
        <Chyron />
        <Description topicDescription={topicState?.desc || ""} />
        <Sponsors />

        <Topics setTopicState={setTopicState} />

        <ShowChatPTI />

        <Hosts />
      </ThemeProvider>
    </>
  );
};

export default OverlayPTI;
