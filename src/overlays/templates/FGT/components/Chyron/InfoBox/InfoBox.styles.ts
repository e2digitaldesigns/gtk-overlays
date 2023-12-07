import styled from "styled-components";

export const InfoBox = styled.div`
  box-sizing: border-box;
  width: 1580px;
  height: 125px;
  position: absolute;
  top: 45px;
  left: 0px;
  background-color: ${props => props.theme.colors.bg3};
  border-left: 0.125rem solid ${props => props.theme.colors.accent1};
  overflow: hidden;
`;

interface ITopicGrid {
  linkState: string;
}

// opacity: ${props => (props.isActive ? "1" : "0")};
// left: ${props => (props.isActive ? "0" : "-100%")};

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
  font-size: 32px;
  line-height: 36px;

  white-space: pre-wrap;
  text-transform: uppercase;
  overflow: hidden;

  ${props => topicStateProps(props.linkState)};
`;
