import styled from "styled-components";

const cssParser = (object1: object) => {
  let str = "";

  for (const [key, value] of Object.entries(object1)) {
    str += `${key}: ${value}; `;
  }

  return str;
};

export const ChatRelayContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: white;
`;

interface IChatRelayWrapperProps {
  sxWrapper: object;
  bgColor: string;
}

export const ChatMessageWrapper = styled.div<IChatRelayWrapperProps>`
  height: 100%;
  width: 100%;
  background-color: ${props => props.bgColor};
  ${props => props?.sxWrapper && cssParser(props.sxWrapper)}
`;

export const ChatMessageWrapperInner = styled.div`
  height: 100%;
  overflow: hidden;
`;

interface IChatMessageGridProps {
  fontSize: string;
  borderBottomColor: string;
  sxGrid: object;
}

export const ChatMessageGrid = styled.div<IChatMessageGridProps>`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.25rem;
  padding: 0.5rem 0.625rem;
  border-bottom: 0.0625rem solid;
  border-bottom-color: ${props => props.borderBottomColor};
  font-size: ${props => props.fontSize};
  ${props => props?.sxGrid && cssParser(props.sxGrid)}
`;

interface IChatMessageProps {
  color: string;
  showImage: boolean;
}

const imageSize = "1.5rem";

export const ChatMessage = styled.div<IChatMessageProps>`
  text-align: left;
  color: ${props => props.color};
  word-break: break-word;
  white-space: pre-wrap;

  display: grid;
  grid-template-columns: ${props => (props?.showImage ? `${imageSize} 1fr` : "1fr")};
  gap: 0.5rem;
`;

export const ChatMessageImage = styled.div`
  width: ${imageSize};
  height: ${imageSize};
  border-radius: 0.125rem;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
