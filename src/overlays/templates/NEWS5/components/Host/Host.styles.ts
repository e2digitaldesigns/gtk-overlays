import styled from "styled-components";

export const HostWrapper = styled.div`
  width: 1280px;
  height: 630px;

  position: absolute;
  top: 10px;
  left: 630px;
  z-index: 10;

  border: 5px solid ${props => props.theme.colors.accent1};
`;

export const TopicDescription = styled.div`
  width: 1090px;
  height: 100px;

  position: absolute;
  top: 485px;
  left: 15px;
  z-index: 10;
  overflow: hidden;

  background-color: ${props => props.theme.colors.bg1};
  border-left: 5px solid ${props => props.theme.colors.accent3};
`;

interface ITopicGrid {
  linkState: string;
}

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

export const TopicGrid = styled.div<ITopicGrid>`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  padding: 10px;
  transition-property: all;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  font-size: 28px;
  line-height: 28px;

  white-space: pre-wrap;
  text-transform: uppercase;
  overflow: hidden;

  ${props => topicStateProps(props.linkState)};
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
