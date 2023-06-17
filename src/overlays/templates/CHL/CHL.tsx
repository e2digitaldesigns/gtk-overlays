import React from "react";
import { ThemeProvider } from "styled-components";
import * as Styled from "./global.styles";
import { theme } from "./Theme/GlobalTheme";
import HeaderTab from "./components/HeaderTab/HeaderTab";
import Host from "./components/Hosts/Host";
import Chyron from "./components/Chyron/Chyron";
import { ShowChatCHL } from "./components/ShowChat/ShowChatCHL";
import { EmojiCHL } from "./components/emoji/Emoji";

const OverlayCHL: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyle />
        <EmojiCHL />
        <Styled.Container>
          <ShowChatCHL />
          <HeaderTab />
          <Host />
          <Chyron />
        </Styled.Container>
      </ThemeProvider>
    </>
  );
};

export default OverlayCHL;
