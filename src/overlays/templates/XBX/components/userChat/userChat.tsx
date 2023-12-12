import React from "react";
import * as Styled from "./userChat.style";
import { ChatDisplay } from "../../../../../globalComponents";
import { SectionsXBX } from "../../../../../types";

import { theme } from "../../Theme/GlobalTheme";
import { useParams } from "../../../../../hooks";

export const ShowChatXBX: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsXBX.ChatMessage)) return null;

  return (
    <Styled.ShowChatWrapper>
      <ChatDisplay
        bgColor={theme.colors.bg1}
        defaultTransition="TopToBottom"
        imageBorder={`1px solid ${theme.colors.accent1}`}
        imageShape="square"
        imageSize="6rem"
        msgFontSize="1.75rem"
        msgFontColor="#ccc"
        messageInline={true}
        nameFontColor="#ffffff"
        nameFontSize="1.75rem"
        nameFontWeight="normal"
      />
    </Styled.ShowChatWrapper>
  );
};
