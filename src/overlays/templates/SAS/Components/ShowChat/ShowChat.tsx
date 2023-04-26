import React from "react";

import * as Styled from "./ShowChat.style";

import { ChatDisplay } from "../../../../../globalComponents";

export interface ChatDisplayChildProps {
  message?: any;
}

const ShowChatSAS: React.FC = () => {
  return (
    <>
      <Styled.ShowChatWrapper>
        <ChatDisplay
          borderBottom="3px solid #a0941c"
          defaultTransition="LeftToRight"
        />
      </Styled.ShowChatWrapper>
    </>
  );
};

export default ShowChatSAS;
