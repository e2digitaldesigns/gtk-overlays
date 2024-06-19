import React from "react";
import * as Styled from "./ChatDisplay.styles";
import { ChatRelay } from "../../../../../globalComponents";
import { useParams } from "../../../../../hooks";
import { SectionsCNN } from "../../../../../types";

export const ChatDisplayCNN: React.FC = () => {
  const { showSection } = useParams();
  if (!showSection(SectionsCNN.ChatDisplay)) return null;

  return (
    <>
      <Styled.ChatBox>
        <ChatRelay fontSize="1.25rem" maxMessages={5} />
      </Styled.ChatBox>
    </>
  );
};
