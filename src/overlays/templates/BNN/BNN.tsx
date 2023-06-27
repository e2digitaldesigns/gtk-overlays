import React from "react";
import { ThemeProvider } from "styled-components";
import * as Styled from "./global.styles";
import { theme } from "./Theme/GlobalTheme";
import HeaderTab from "./components/HeaderTab/HeaderTab";
import Host from "./components/Hosts/Host";
import Chyron from "./components/Chyron/Chyron";
import { EmojiBNN } from "./components/Emojis/Emojis";

const OverlayBNN: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyle />
        <Styled.Container>
          <EmojiBNN />
          <HeaderTab />
          <Host />
          <Chyron />
        </Styled.Container>
      </ThemeProvider>
    </>
  );
};

export default OverlayBNN;
