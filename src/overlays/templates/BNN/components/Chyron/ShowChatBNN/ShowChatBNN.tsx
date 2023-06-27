import React from "react";
import * as Styled from "./ShowChatBNN.style";
import { ChatDisplay } from "../../../../../../globalComponents";

import { theme } from "../../../Theme/GlobalTheme";

export interface ChatDisplayChildProps {
  message?: any;
}

export const ShowChatBNN: React.FC = () => {
  return (
    <Styled.ShowChatWrapper>
      <ChatDisplay
        bgColor="black"
        defaultTransition="BottomToTop"
        font="BebasNeue"
        imageBorder={`1px solid ${theme.colors.accent1}`}
        imageShape="square"
        imageSize="6.25rem"
        msgFontSize="2.25rem"
        messageInline={true}
        nameFontColor="#ffffff"
        nameFontSize="2.25rem"
        nameFontWeight="normal"
        borderBottom={`1px dotted ${theme.colors.accent1}`}
      />
    </Styled.ShowChatWrapper>
  );
};
