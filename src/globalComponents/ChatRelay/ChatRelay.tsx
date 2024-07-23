import React from "react";
import * as Styled from "./ChatRelay.styles";
import socketServices from "../../services/socketServices";
import { ChatRelayData, RequestType } from "../../types";
import { ShowMessages } from "./ShowMessage";
import { STORAGE_KEY } from "./../../types";
import _cloneDeep from "lodash/cloneDeep";
import axios from "axios";

interface ChatRelayComponentProps {
  bgColor?: string;
  borderBottomColor?: string;
  defaultNameColor?: string;
  direction?: "top" | "bottom";
  fontSize?: string;
  maxMessages?: number;
  sxGrid?: object;
  sxWrapper?: object;
  textColor?: string;
  useTwitchNameColor?: boolean;
}

const ChatRelayComponent: React.FC<ChatRelayComponentProps> = ({
  bgColor = "transparent",
  borderBottomColor = "#3a3a3a;",
  defaultNameColor = "#fff",
  direction = "bottom",
  fontSize = "0.875rem",
  maxMessages = 20,
  sxGrid = {},
  sxWrapper = {},
  textColor = "#fff",
  useTwitchNameColor = true
}) => {
  const queryParams = new URLSearchParams(window.location.search);
  const [chatMessages, setChatMessages] = React.useState<ChatRelayData[]>([]);
  const innerRef = React.useRef<HTMLDivElement>(null);
  const userId = queryParams.get(RequestType.UserId);

  React.useEffect(() => {
    if (!userId) return;

    const fetchMessages = async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_REST_SERVICE + `chatlog/messages/${userId}`
      );

      data && setChatMessages(data.messages);
    };

    fetchMessages();
  }, [userId]);

  React.useEffect(() => {
    if (direction === "bottom") {
      innerRef.current?.scrollTo(0, innerRef.current.scrollHeight);
    }
  }, [chatMessages, direction]);

  React.useEffect(() => {
    socketServices.subscribeChatRelay((err: unknown, data: ChatRelayData) => {
      if (data?.uid !== queryParams.get(RequestType.UserId)) return;

      switch (data.action) {
        case "clear-chat-messages":
          setChatMessages([]);
          window.localStorage.removeItem(STORAGE_KEY.CHAT_MESSAGES_OVERLAY);
          break;

        case "new-chat-message":
          setChatMessages(prev => [...prev, data]);
          break;

        case "remove-last-message":
          setChatMessages(prev => prev.slice(0, -1));
          break;

        case "delete-message-by-id":
          setChatMessages(prev => prev.filter(msg => msg._id !== data._id));
          break;

        default:
          break;
      }
    });

    return () => {
      socketServices.unSubscribeChatRelay();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let messages = _cloneDeep(chatMessages).slice(-maxMessages);
  direction === "top" && messages.reverse();

  return (
    <>
      <Styled.ChatRelayContainer>
        <Styled.ChatMessageWrapper bgColor={bgColor} sxWrapper={sxWrapper}>
          <Styled.ChatMessageWrapperInner ref={innerRef}>
            {messages.map(message => (
              <Styled.ChatMessageGrid
                key={message._id}
                borderBottomColor={borderBottomColor}
                fontSize={fontSize}
                sxGrid={sxGrid}
              >
                <Styled.ChatMessage color={textColor}>
                  <ShowMessages
                    defaultNameColor={defaultNameColor}
                    message={message.msgEmotes}
                    name={message.name}
                    twitchNameColor={message.fontColor}
                    useTwitchNameColor={useTwitchNameColor}
                  />
                </Styled.ChatMessage>
              </Styled.ChatMessageGrid>
            ))}
          </Styled.ChatMessageWrapperInner>
        </Styled.ChatMessageWrapper>
      </Styled.ChatRelayContainer>
    </>
  );
};

export default ChatRelayComponent;
