import React from "react";
import { useParams } from "../../../../../hooks";
import { SectionsSAS } from "../../../../../types";

import * as Styled from "./ShowChat.style";

import { ChatDisplay } from "../../../../../globalComponents";

export interface ChatDisplayChildProps {
  message?: any;
}

const ShowChatSAS: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsSAS.ChatMessage)) return null;
  return (
    <>
      <Styled.ShowChatWrapper>
        <ChatDisplay
          borderBottom="3px solid #a0941c"
          defaultTransition="LeftToRight"
          font="Bebas Neue"
          msgFontSize="1.875rem"
        />
      </Styled.ShowChatWrapper>
    </>
  );
};

export default ShowChatSAS;
