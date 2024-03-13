import React from "react";

import * as Styled from "./ShowChat.style";
import { ChatMessgeReturn, RequestType } from "../../types";
import socketServices from "../../services/socketServices";
import { MessageParser } from "./MessageParser";

type ChatMessage = {
  _id: string;
  broadcasterName: string;
  name: string;
  msg: string | React.ReactElement;
  url: string;
  fontColor: string;
  showTime?: number;
  transition?: TransitionDirection;
};

export interface ChatDisplayChildProps {
  message: ChatMessage;
}

type TransitionDirection =
  | "LeftToRight"
  | "RightToLeft"
  | "TopToBottom"
  | "BottomToTop"
  | "FadeIn"
  | "ScaleIn";

interface ShowChatProps {
  defaultShowTime?: number;

  imageShape?: "circle" | "square";
  imageSize?: string;
  imageBorder?: string;
  imageShow?: boolean;

  font?: string;

  msgFontColor?: string;
  msgFontSize?: string;
  msgFontWeight?: string;

  nameFontColor?: string;
  nameFontSize?: string;
  nameFontWeight?: string;

  messageInline?: boolean;

  bgColor?: string;
  borderBottom?: string;

  defaultTransition?: TransitionDirection;
  transitionTime?: number;
}

const ChatDisplay: React.FC<ShowChatProps> = ({
  defaultShowTime = 45000,
  imageShape = "circle",
  imageSize = "3rem",
  imageBorder = "none",
  imageShow = true,

  font = `"Roboto", sans-serif`,

  msgFontColor = "white",
  msgFontSize = "1.25rem",
  msgFontWeight = "normal",

  nameFontColor = "#956dcf",
  nameFontSize = "1.5rem",
  nameFontWeight = "700",

  messageInline = false,

  bgColor = "#24082e",
  borderBottom = "none",

  defaultTransition = "LeftToRight",
  transitionTime = 500
}) => {
  const [message, setMessage] = React.useState<ChatMessage>();
  const [nextMessage, setNextMessage] = React.useState<ChatMessage>();
  const [isActive, setIsActive] = React.useState<boolean>(false);

  const queryParams = React.useMemo(() => {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams;
  }, []);

  let timeoutId = React.useRef<NodeJS.Timeout | undefined>(undefined);

  React.useEffect(() => {
    if (!nextMessage) return;

    if (!message) {
      setMessage(nextMessage);
      setIsActive(true);

      timeoutId.current = setTimeout(() => {
        setIsActive(false);
      }, nextMessage?.showTime || defaultShowTime);
    }

    if (message) {
      clearTimeout(timeoutId.current);
      setIsActive(false);
      setTimeout(() => {
        setMessage(nextMessage);
        setIsActive(true);

        timeoutId.current = setTimeout(() => {
          setIsActive(false);
        }, nextMessage?.showTime || defaultShowTime);
      }, transitionTime);
    }

    setNextMessage(undefined);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextMessage, message]);

  React.useEffect(() => {
    let stillHere = true;

    socketServices.subscribeChatDisplay(
      (err: unknown, data: ChatMessgeReturn) => {
        if (data?.uid !== queryParams.get(RequestType.UserId)) return;
        if (data?.tid && data.tid !== queryParams.get(RequestType.Template))
          return;

        switch (data.action) {
          case "showChatMessage":
            stillHere && setNextMessage(JSON.parse(data.message));
            break;

          case "hideChatMessage":
            setTimeout(() => {
              stillHere && setIsActive(false);
            }, transitionTime);

            break;
        }
      }
    );

    return () => {
      stillHere = false;
      socketServices.unSubscribeChatDisplay();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams]);

  const theMessage = React.useMemo(() => {
    if (!message?.msg) return;

    return {
      ...message,
      msg: <MessageParser message={message.msg as string} />
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return (
    <>
      <Styled.ShowChatWrapper>
        <Styled.ShowChatInner
          data-testid="chat-display"
          isActive={isActive}
          transition={message?.transition || defaultTransition}
          transitionTime={transitionTime}
        >
          <Styled.EntireChatWrapper
            bgColor={bgColor}
            borderBottom={borderBottom}
          >
            {imageShow && (
              <Styled.ShowChatImage
                border={imageBorder}
                shape={imageShape}
                size={imageSize}
              >
                {message?.url && <img src={message.url} alt="users" />}
              </Styled.ShowChatImage>
            )}

            <Styled.MessageWrapper font={font} inline={messageInline}>
              <Styled.MessageName
                color={nameFontColor}
                fontSize={nameFontSize}
                weight={nameFontWeight}
              >
                {message?.name}
                {messageInline && ": "}
              </Styled.MessageName>
              <Styled.MessageText
                color={msgFontColor}
                fontSize={msgFontSize}
                weight={msgFontWeight}
              >
                {theMessage?.msg}
              </Styled.MessageText>
            </Styled.MessageWrapper>
          </Styled.EntireChatWrapper>
        </Styled.ShowChatInner>
      </Styled.ShowChatWrapper>
    </>
  );
};

export default ChatDisplay;
