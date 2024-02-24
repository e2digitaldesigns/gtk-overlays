import React from "react";
import * as Styled from "./ChatRelay.styles";
import socketServices from "../../services/socketServices";
import { ChatRelayData, RequestType } from "../../types";
import { ShowMessages } from "./ShowMessage";
import { STORAGE_KEY } from "./../../types";
import _cloneDeep from "lodash/cloneDeep";

interface ChatRelayComponentProps {
  direction?: "top" | "bottom";
  sxWrapper?: object;
  bgColor?: string;
  sxGrid?: object;
  borderBottomColor?: string;
  fontSize?: string;

  defaultNameColor?: string;
  useTwitchNameColor?: boolean;
  textColor?: string;
  maxMessages?: number;
}

const ChatRelayComponent: React.FC<ChatRelayComponentProps> = ({
  direction = "bottom",
  bgColor = "transparent",
  sxGrid = {},
  sxWrapper = {},
  borderBottomColor = "#3a3a3a;",
  fontSize = "0.875rem",

  defaultNameColor = "#fff",
  useTwitchNameColor = true,
  textColor = "#fff",

  maxMessages = 20
}) => {
  const queryParams = new URLSearchParams(window.location.search);
  const [chatMessages, setChatMessages] = React.useState<ChatRelayData[]>([]);
  const innerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const data = window.localStorage.getItem(STORAGE_KEY.CHAT_MESSAGES_OVERLAY);
    const storedData = data && JSON.parse(data);
    if (storedData) {
      setChatMessages(storedData);
    }
  }, []);

  React.useEffect(() => {
    innerRef.current?.scrollTo(0, innerRef.current.scrollHeight);

    chatMessages.length &&
      window.localStorage.setItem(
        STORAGE_KEY.CHAT_MESSAGES_OVERLAY,
        JSON.stringify(chatMessages.slice(-20))
      );
  }, [chatMessages]);

  React.useEffect(() => {
    socketServices.subscribeChatRelay((err: unknown, data: ChatRelayData) => {
      if (data?.uid !== queryParams.get(RequestType.UserId)) return;

      setChatMessages(prev => [...prev, data]);
      return;
    });

    return () => {
      socketServices.unSubscribeChatRelay();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let messages = _cloneDeep(chatMessages);

  messages = messages.slice(-maxMessages);
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
                    message={message.msgEmotes}
                    name={message.name}
                    twitchNameColor={message.fontColor}
                    defaultNameColor={defaultNameColor}
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
