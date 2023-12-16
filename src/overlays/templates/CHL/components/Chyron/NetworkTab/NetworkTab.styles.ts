import styled from "styled-components";

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

export const NetworkTab = styled.div`
  height: 45px;
  width: 875px;
  position: absolute;
  top: 0;
  left: 225px;
  background-color: ${props => props.theme.colors.accent1};

  display: flex;
  align-items: center;
  font-size: 1.75rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.25rem 0.625rem;
  overflow: hidden;
`;

interface ITopicGrid {
  linkState: string;
}

export const TopicGrid = styled.div<ITopicGrid>`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  transition-property: all;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;

  white-space: pre-wrap;
  text-transform: uppercase;
  overflow: hidden;
  padding-top: 6px;

  ${props => topicStateProps(props.linkState)};
`;
