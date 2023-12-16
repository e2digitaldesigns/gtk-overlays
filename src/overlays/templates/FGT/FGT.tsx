import React from "react";
import { ThemeProvider } from "styled-components";
import * as Styled from "./global.styles";
import { theme } from "./Theme/GlobalTheme";
import Chyron from "./components/Chyron/Chyron";

import HostFGT from "./components/Host/Host";
import { UpNextFGT } from "./components/UpNext/UpNext";
import { ShowChatFGT } from "./components/ShowChat/ShowChatFGT";
import { VideoFGT } from "./Video/Video";

const OverlayFGT: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyle />

        <Styled.Container>
          <ShowChatFGT />
          <UpNextFGT />

          <VideoFGT />

          <HostFGT />
          <Chyron />
        </Styled.Container>
      </ThemeProvider>
    </>
  );
};

export default OverlayFGT;
