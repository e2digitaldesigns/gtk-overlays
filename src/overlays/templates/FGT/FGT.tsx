import React from "react";
import { ThemeProvider } from "styled-components";
import * as Styled from "./global.styles";
import { theme } from "./Theme/GlobalTheme";
import Chyron from "./components/Chyron/Chyron";

import { useDataContext } from "../../../context";
import { useSimpleTopic, useVoting } from "../../../hooks";
import HostFGT from "./components/Host/Host";
import { UpNextFGT } from "./components/UpNext/UpNext";
import { ShowChatFGT } from "./components/ShowChat/ShowChatFGT";
import { VideoFGT } from "./Video/Video";

const OverlayFGT: React.FC = () => {
  const { topics } = useDataContext();
  const { trueOrFalseVotes, voting, votes } = useVoting();

  const { isTimerPaused, topic } = useSimpleTopic(topics);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyle />

        <Styled.Container>
          <ShowChatFGT />
          <UpNextFGT activeTopic={topic} topics={topics} />

          <VideoFGT topicId={topic?._id} topicVideo={topic?.video} />

          <HostFGT voting={voting} votes={votes} />
          <Chyron
            isTimerPaused={isTimerPaused}
            topic={topic}
            trueOrFalseVotes={trueOrFalseVotes}
          />
        </Styled.Container>
      </ThemeProvider>
    </>
  );
};

export default OverlayFGT;