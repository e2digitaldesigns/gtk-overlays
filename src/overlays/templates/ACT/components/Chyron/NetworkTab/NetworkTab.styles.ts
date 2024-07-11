import styled from "styled-components";

const topicStateProps = (linkState: string) => {
  let style;

  switch (linkState) {
    case "unvisited":
      style = ` left: -50%; opacity: 0;`;
      break;

    case "active":
      style = ` left: 20px; opacity: 1;`;
      break;

    case "visited":
      style = ` left: 50%; opacity: 0;`;
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
  left: 275px;
  background-color: ${props => props.theme.colors.accent1};

  display: flex;
  align-items: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 0.25rem 1.5rem;

  overflow: hidden;

  transform: skew(-30deg);
  > * {
    transform: skew(30deg);
  }
`;

interface ITopicGrid {
  linkState: string;
}

export const TopicGrid = styled.div<ITopicGrid>`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  transition-property: all;
  transition-duration: 1.5s;
  transition-timing-function: ease-in-out;

  align-items: center;
  white-space: pre-wrap;
  text-transform: uppercase;
  overflow: hidden;

  ${props => topicStateProps(props.linkState)};
`;
