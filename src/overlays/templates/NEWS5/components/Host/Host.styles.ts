import styled, { keyframes } from "styled-components";

export const HostWrapper = styled.div`
  width: 1280px;
  height: 630px;

  position: absolute;
  top: 10px;
  left: 630px;
  z-index: 10;

  border: 5px solid ${props => props.theme.colors.accent1};
`;

export const TopicDescriptionWrapper = styled.div`
  width: 1090px;
  height: 100px;
  overflow: hidden;

  position: absolute;
  top: 485px;
  left: 15px;
  z-index: 10;

  background-color: ${props => props.theme.colors.bg1};
  border-left: 5px solid ${props => props.theme.colors.accent3};
`;

const topicStateProps = (linkState: string) => {
  let style;

  switch (linkState) {
    case "unvisited":
      style = ` top: -100%; opacity: 0;`;
      break;

    case "active":
      style = ` top: 0; opacity: 1;`;
      break;

    case "visited":
      style = ` top: 100%; opacity: 0;`;
      break;

    default:
      break;
  }

  return style;
};

interface ITopicGrid {
  linkState: string;
  hasImage: boolean;
}

export const TopicGrid = styled.div<ITopicGrid>`
  position: absolute;
  width: 100%;
  height: 100%;
  transition-property: all;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;

  overflow: hidden;

  display: grid;
  grid-template-columns: ${props => (props.hasImage ? "140px 1fr" : "1fr")};
  /* grid-gap: 5px; */

  ${props => topicStateProps(props.linkState)}
`;

export const TopicImage = styled.div`
  height: 90px;
  width: 135px;

  margin: 5px 0 0 5px;
  background-color: ${props => props.theme.colors.bg1};
  border: 2px solid ${props => props.theme.colors.accent2};
  overflow: hidden;
  > img {
    height: 90px;
    width: 135px;
  }

  border-bottom: 2px solid ${props => props.theme.colors.accent2};
`;

export const TopicDescription = styled.div<{ hasImage: boolean }>`
  width: ${props => (props.hasImage ? "940px" : "1085px")};
  height: 100px;
  margin-left: 5px;

  font-size: 1.75rem;

  white-space: pre-wrap;
  text-transform: uppercase;

  text-overflow: "ellipsis";
  overflow: hidden;
`;

export const VoteDisplay = styled.div`
  width: 60px;
  height: 35px;
  font-size: 1.25rem;

  position: absolute;
  top: 445px;
  left: 15px;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.bg2};
  border-right: 3px solid ${props => props.theme.colors.border2};
`;

export const EmojiPlacement = styled.div`
  width: 60px;
  height: 35px;
  font-size: 24px;

  position: absolute;
  top: 460px;
  left: 30px;
  z-index: 8;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HostNameWrapper = styled.div`
  width: 390px;
  height: 35px;
  font-size: 24px;

  position: absolute;
  top: 445px;
  left: 75px;
  z-index: 8;
  padding-left: 10px;

  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.bg3};
`;

export const HostNameWrapperName = styled.div`
  text-transform: uppercase;
  font-size: 1.25rem;
`;

const animationOut = keyframes`
  0% {
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
`;

export const HostWrapperGlow = styled.div`
  width: 1280px;
  height: 630px;

  position: absolute;
  top: 10px;
  left: 630px;
  z-index: 12;

  border: 5px solid ${props => props.theme.colors.accent3};

  animation-name: ${animationOut};
  animation-duration: 30s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;
