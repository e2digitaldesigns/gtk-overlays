import React from "react";
import * as Styled from "./ShowChatCNN.style";
import { ChatDisplay } from "../../../../../globalComponents";
import { SectionsCNN } from "../../../../../types";

import { useParams } from "../../../../../hooks";

export const ShowChatCNN: React.FC = () => {
  const { showSection } = useParams();
  if (!showSection(SectionsCNN.ChatMessage)) return null;

  return (
    <>
      <Styled.ShowChatStarter> </Styled.ShowChatStarter>
      <Styled.ShowChatWrapper>
        <ChatDisplay
          bgColor={"transparent"}
          defaultTransition="TopToBottom"
          font="Poppins"
          imageShape="square"
          imageSize="6rem"
          imageShow={false}
          msgFontSize="1.5rem"
          msgFontColor="#ccc"
          messageInline={true}
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
