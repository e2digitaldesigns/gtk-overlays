import React from "react";
import * as Styled from "./ShowChatCHL.style";
import { ChatDisplay } from "../../../../../globalComponents";

import { theme } from "../../Theme/GlobalTheme";

export interface ChatDisplayChildProps {
  message?: any;
}

export const ShowChatCHL: React.FC = () => {
  return (
    <Styled.ShowChatWrapper>
      <ChatDisplay
        bgColor={theme.colors.bg1}
        defaultTransition="LeftToRight"
        font="BebasNeue"
        imageBorder="1px solid #fff"
        imageShape="square"
        imageSize="6.25rem"
        msgFontSize="1.5rem"
        msgFontColor="#ccc"
        messageInline={true}
        nameFontColor="#ffffff"
        nameFontSize="1.75rem"
        nameFontWeight="normal"
      />
    </Styled.ShowChatWrapper>
  );
};
