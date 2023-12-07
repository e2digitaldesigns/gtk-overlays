import React from "react";
import { ThemeProvider } from "styled-components";
import * as Styled from "./global.styles";
import { theme } from "./Theme/GlobalTheme";
import Chyron from "./components/Chyron/Chyron";

import { useDataContext } from "../../../context";
import { useSimpleTopic } from "../../../hooks";
import HostFGT from "./components/Host/Host";
import { UpNextFGT } from "./components/UpNext/UpNext";
import { ShowChatFGT } from "./components/ShowChat/ShowChatFGT";

const OverlayFGT: React.FC = () => {
  const { topics } = useDataContext();

  const { isTimerPaused, topic } = useSimpleTopic(topics);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyle />

        <Styled.Container>
          <ShowChatFGT />
          <UpNextFGT activeTopic={topic} topics={topics} />

          <HostFGT seat={1} />
          <HostFGT seat={2} />
          <HostFGT seat={3} />
          <HostFGT seat={4} />
          <Chyron isTimerPaused={isTimerPaused} topic={topic} />
        </Styled.Container>
      </ThemeProvider>
    </>
  );
};

export default OverlayFGT;
