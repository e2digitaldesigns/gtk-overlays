import React from "react";
import * as Styled from "./ShowChatCHL.style";
import { ChatDisplay } from "../../../../../globalComponents";
import { SectionsCHL } from "../../../../../types";

import { theme } from "../../Theme/GlobalTheme";
import { useParams } from "../../../../../hooks";

export const ShowChatCHL: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsCHL.ChatMessage)) return null;

  return (
    <Styled.ShowChatWrapper>
      <ChatDisplay
        bgColor={theme.colors.bg1}
        borderBottom={`.25rem solid ${theme.colors.accent1}`}
        defaultTransition="LeftToRight"
        imageBorder={`1px solid ${theme.colors.accent1}`}
        imageShape="square"
        imageSize="6rem"
        messageInline={true}
        msgFontColor="#ccc"
        msgFontSize="1.75rem"
        nameFontColor="#ffffff"
        nameFontSize="1.75rem"
        nameFontWeight="normal"
      />
    </Styled.ShowChatWrapper>
  );
};
