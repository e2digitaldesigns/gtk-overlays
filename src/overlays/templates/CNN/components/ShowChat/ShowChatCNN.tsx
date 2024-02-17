import React from "react";
import * as Styled from "./ShowChatCNN.style";
import { ChatDisplay } from "../../../../../globalComponents";
import { SectionsCNN } from "../../../../../types";

import { useParams } from "../../../../../hooks";

import { theme } from "../../Theme/GlobalTheme";

export const ShowChatCNN: React.FC = () => {
  const { showSection } = useParams();
  if (!showSection(SectionsCNN.ChatMessage)) return null;

  return (
    <>
      <Styled.ShowChatWrapper>
        <ChatDisplay
          bgColor={theme.colors.accent1}
          defaultTransition="TopToBottom"
          font="Poppins"
          imageShape="square"
          imageSize="5rem"
          imageShow={true}
          msgFontSize="1.5rem"
          msgFontColor="#ccc"
          messageInline={false}
          nameFontColor="#ffffff"
          nameFontSize="1.5rem"
          nameFontWeight="normal"
          borderBottom={"0"}
          transitionTime={750}
        />
      </Styled.ShowChatWrapper>
    </>
  );
};
