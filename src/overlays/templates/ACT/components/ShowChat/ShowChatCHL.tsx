import React from "react";
import * as Styled from "./ShowChatACT.style";
import { ChatDisplay } from "../../../../../globalComponents";
import { SectionsACT } from "../../../../../types";

import { theme } from "../../Theme/GlobalTheme";
import { useParams } from "../../../../../hooks";

export const ShowChatACT: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsACT.ChatMessage)) return null;

  return (
    <Styled.ShowChatWrapper>
      <Styled.ShowChatWrapperInner>
        <ChatDisplay
          bgColor={"transparent"}
          defaultTransition="TopToBottom"
          imageBorder={`1px solid ${theme.colors.accent2}`}
          imageShape="square"
          imageSize="6rem"
          messageInline={true}
          msgFontColor="#ccc"
          msgFontSize="1.75rem"
          nameFontColor="#ffffff"
          nameFontSize="1.75rem"
          nameFontWeight="normal"
        />
      </Styled.ShowChatWrapperInner>
    </Styled.ShowChatWrapper>
  );
};
