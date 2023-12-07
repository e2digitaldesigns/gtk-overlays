import React from "react";
import * as Styled from "./ShowChatCFGT.style";
import { ChatDisplay } from "../../../../../globalComponents";
import { SectionsFGT } from "../../../../../types";

import { theme } from "../../Theme/GlobalTheme";
import { useParams } from "../../../../../hooks";

export interface ChatDisplayChildProps {
  message?: any;
}

export const ShowChatFGT: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsFGT.ChatMessage)) return null;

  return (
    <Styled.ShowChatWrapper>
      <ChatDisplay
        bgColor={"#000"}
        defaultTransition="TopToBottom"
        font="Bebas Neue"
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
        transitionTime={750}
      />
    </Styled.ShowChatWrapper>
  );
};
