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
  background-color: #202124;
  ${props => props?.sxWrapper && cssParser(props.sxWrapper)}
`;

export const ChatMessageWrapperInner = styled.div`
  overflow: hidden !important;
  height: 100%;
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
  padding: 0.5rem;
  border-bottom: 0.0625rem solid;
  border-bottom-color: ${props => props.borderBottomColor};
  color: #ccc;
  min-height: 1.5rem;
  font-size: ${props => props.fontSize};
  ${props => props?.sxGrid && cssParser(props.sxGrid)}
`;

interface IChatMessageProps {
  color: string;
}

export const ChatMessage = styled.div<IChatMessageProps>`
  color: ${props => props.color};
  word-break: break-word;
  white-space: pre-wrap;
`;
