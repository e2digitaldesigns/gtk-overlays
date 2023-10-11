import React from "react";
import * as Styled from "./ShowChatCHL.style";
import { ChatDisplay } from "../../../../../globalComponents";
import { SectionsCHL } from "../../../../../types";

import { theme } from "../../Theme/GlobalTheme";
import { useParams } from "../../../../../hooks";

export interface ChatDisplayChildProps {
  message?: any;
}

export const ShowChatCHL: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsCHL.ChatMessage)) return null;

  return (
    <Styled.ShowChatWrapper>
      <ChatDisplay
        bgColor={theme.colors.bg1}
        defaultTransition="LeftToRight"
        imageBorder={`1px solid ${theme.colors.accent1}`}
        imageShape="square"
        imageSize="6rem"
        msgFontSize="1.75rem"
        msgFontColor="#ccc"
        messageInline={true}
        nameFontColor="#ffffff"
        nameFontSize="1.75rem"
        nameFontWeight="normal"
        borderBottom={`.25rem solid ${theme.colors.accent1}`}
      />
    </Styled.ShowChatWrapper>
  );
};
