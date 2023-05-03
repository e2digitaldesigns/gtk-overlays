import React from "react";
import * as Styled from "./ShowChatPTI.style";
import { ChatDisplay } from "../../../../globalComponents";

export interface ChatDisplayChildProps {
  message?: any;
}

export const ShowChatPTI: React.FC = () => {
  return (
    <Styled.ShowChatWrapper>
      <ChatDisplay
        bgColor="#a15004"
        defaultTransition="BottomToTop"
        font="BebasNeue"
        imageBorder="1px solid #100727"
        imageShape="square"
        imageSize="6.25rem"
        msgFontSize="2.75rem"
        messageInline={true}
        nameFontColor="#ffffff"
        nameFontSize="2.75rem"
        nameFontWeight="normal"
      />
    </Styled.ShowChatWrapper>
  );
};
