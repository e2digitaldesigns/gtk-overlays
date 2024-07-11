import styled from "styled-components";

export const InfoBoxWrapper = styled.div`
  box-sizing: border-box;
  width: 1920px;
  height: 135px;
  position: absolute;
  bottom: 50px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.9);
  border-bottom: 0.25rem solid ${props => props.theme.colors.accent6};
  overflow: hidden;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.5);
`;

export const InfoBox = styled.div`
  width: 1400px;
  height: 135px;
  position: relative;

  background: linear-gradient(
    180deg,
    ${props => props.theme.colors.accent5} 0%,
    ${props => props.theme.colors.accent1} 50%
  );

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: -35px;
    width: 75px;
    height: 135px;
    background-color: ${props => props.theme.colors.bg1};
    background: linear-gradient(
      180deg,
      ${props => props.theme.colors.accent5} 0%,
      ${props => props.theme.colors.accent1} 50%
    );

    z-index: 10;
    transform: skew(-30deg);
    border-right: 0.5rem solid ${props => props.theme.colors.accent2};
  }
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
  padding: 10px 10px 10px 50px;
  transition-property: all;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  font-size: 36px;
  line-height: 40px;

  white-space: pre-wrap;
  text-transform: uppercase;
  overflow: hidden;

  ${props => topicStateProps(props.linkState)};
`;
