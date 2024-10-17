import React, { useEffect } from "react";
import * as Styled from "./ChatRelay.styles";
import { ShowMessages } from "./ShowMessage";
import { useQueryParams } from "../../hooks";
import _sortBy from "lodash/sortBy";

export type ChatMessage = {
  _id: string;
  channel: string;
  date: string;
  fontColor: string;
  gtkUserId: string;
  image: string;
  isDeleted: boolean;
  isRankReset: boolean;
  message: string;
  msgEmotes: string;
  platform: string;
  tagId: string;
  userId: string;
  username: string;
};

interface ChatRelayProps {
  bgColor?: string;
  borderBottomColor?: string;
  defaultNameColor?: string;
  direction?: "top" | "bottom";
  fontSize?: string;
  maxMessages?: number;
  showImage?: boolean;
  sxGrid?: object;
  sxWrapper?: object;
  textColor?: string;
}

const ChatRelayComponent: React.FC<ChatRelayProps> = ({
  bgColor = "transparent",
  borderBottomColor = "#3a3a3a;",
  defaultNameColor = "#fff",
  direction = "bottom",
  fontSize = "0.875rem",
  showImage = true,
  sxGrid = {},
  sxWrapper = {},
  textColor = "#fff"
}) => {
  const [chatMessages, setChatMessages] = React.useState<ChatMessage[]>([]);
  const { userId } = useQueryParams();
  const chatInnerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    const eventSource = new EventSource(`http://localhost:8002/api/v1/chat-relay/events/${userId}`);

    eventSource.addEventListener("message", event => {
      const parsedData = JSON.parse(event.data);
      if (isMounted) setChatMessages(parsedData);
    });

    return () => {
      isMounted = false;
      eventSource.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (chatInnerRef.current && direction === "bottom") {
      chatInnerRef.current.scrollTop = chatInnerRef.current.scrollHeight;
    }
  }, [chatMessages, direction]);

  const messages = direction === "bottom" ? _sortBy(chatMessages, "date") : chatMessages;

  return (
    <Styled.ChatRelayContainer>
      <Styled.ChatMessageWrapper bgColor={bgColor} sxWrapper={sxWrapper}>
        <Styled.ChatMessageWrapperInner ref={chatInnerRef}>
          {messages.map((msg: ChatMessage) => (
            <Styled.ChatMessageGrid
              key={msg._id}
              borderBottomColor={borderBottomColor}
              fontSize={fontSize}
              sxGrid={sxGrid}
            >
              <Styled.ChatMessage color={textColor} showImage={!!(showImage && !!msg.image)}>
                {showImage && msg.image && (
                  <Styled.ChatMessageImage>
                    <img src={msg.image} alt={msg.username} />
                  </Styled.ChatMessageImage>
                )}
                <ShowMessages
                  message={msg.msgEmotes}
                  name={msg.username}
                  nameColor={defaultNameColor}
                />
              </Styled.ChatMessage>
            </Styled.ChatMessageGrid>
          ))}
        </Styled.ChatMessageWrapperInner>
      </Styled.ChatMessageWrapper>
    </Styled.ChatRelayContainer>
  );
};

export default ChatRelayComponent;
