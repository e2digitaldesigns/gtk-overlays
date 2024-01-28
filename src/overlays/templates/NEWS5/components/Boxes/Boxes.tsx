import React from "react";
import * as Styled from "./Boxes.styles";
import { ChatRelay } from "../../../../../globalComponents";

export const BoxesCNN: React.FC = () => {
  return (
    <Styled.BoxGrid>
      <Styled.ChatBox>
        <ChatRelay fontSize="1.25rem" maxMessages={5} />
      </Styled.ChatBox>
      <Styled.Box></Styled.Box>
    </Styled.BoxGrid>
  );
};
