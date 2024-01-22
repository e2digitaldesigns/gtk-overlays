import styled from "styled-components";

export const ShowChatWrapper = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;

  width: 100%;
  height: 100%;
  overflow: hidden;
`;

interface IShowChatInner {
  isActive?: boolean;
  transition: string;
  transitionTime: number;
}

export const ShowChatInner = styled.div<IShowChatInner>`
  position: absolute;
  ${props => parseTransition(props.transition, props.isActive)};

  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: ${props => props.transitionTime + "ms"} ease-in-out;
`;

interface IEntireChatWrapper {
  bgColor: string;
  borderBottom: string;
}

export const EntireChatWrapper = styled.div<IEntireChatWrapper>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.bgColor};
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.625rem;

  border-bottom: ${props => props.borderBottom};
  transition: left 500ms ease-in-out;
`;

interface IShowChatImageProps {
  border: string;
  shape: "circle" | "square";
  size: string;
}

export const ShowChatImage = styled.div<IShowChatImageProps>`
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: #24082e;
  overflow: hidden;
  border-radius: ${props => (props.shape === "circle" ? "50%" : "0")};
  border: ${props => props?.border};

  img {
    width: 100%;
  }
`;

interface IMessageWrapper {
  font: string;
  inline: boolean;
}

export const MessageWrapper = styled.div<IMessageWrapper>`
  display: ${props => (props.inline ? "block-inline" : "flex")};
  flex-direction: column;
  white-space: normal !important;

  font-family: ${props => props.font};
  color: white;
  margin-bottom: 50px;

  text-shadow: 1px 2px #000;
`;

interface IMessageNameProps {
  color: string;
  fontSize: string;
  weight: string;
}
export const MessageName = styled.span<IMessageNameProps>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.weight};
  line-height: ${props => props.fontSize};
`;

interface IMessageTextProps {
  color: string;
  fontSize: string;
  weight: string;
}

export const MessageText = styled.span<IMessageTextProps>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.weight};
  word-break: break-word;
  line-height: ${props => props.fontSize};

  img {
    height: 1.5rem;
  }
`;

function parseTransition(
  transtion: string,
  isActive: boolean | undefined
): string {
  let css = "";

  switch (transtion) {
    case "LeftToRight":
      css = `top: 0; left: ${isActive ? 0 : "-100%"}`;
      break;

    case "RightToLeft":
      css = `top: 0; left: ${isActive ? 0 : "100%"}`;

      break;

    case "TopToBottom":
      css = `left: 0; top: ${isActive ? 0 : "-100%"}`;
      break;

    case "BottomToTop":
      css = `left: 0; top: ${isActive ? 0 : "100%"}`;
      break;

    case "FadeIn":
      css = `opacity: ${isActive ? 1 : 0}`;
      break;

    case "ScaleIn":
      css = `${isActive ? "transform: scale(1)" : "transform: scale(0)"}`;
      break;
  }

  return css;
}
