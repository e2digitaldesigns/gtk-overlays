import styled from "styled-components";

export const TopicDescriptionWrapper = styled.div`
  width: 1280px;
  height: 100px;
  overflow: hidden;

  position: absolute;
  left: 630px;
  top: 650px;

  background-color: ${props => props.theme.colors.accent1};
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
  gap: 0;
  padding-left: ${props => (props.hasImage ? "0" : "10px")};

  ${props => topicStateProps(props.linkState)}
`;

export const TopicImage = styled.div`
  height: 100px;
  width: 135px;

  background-color: ${props => props.theme.colors.bg1};

  overflow: hidden;
  > img {
    height: 90px;
    width: 135px;
    margin: 5px;
  }

  /* border: 2px solid ${props => props.theme.colors.accent2}; */
`;

export const TopicDescription = styled.div<{ hasImage: boolean }>`
  width: ${props => (props.hasImage ? "1120px" : "1255px")};
  height: 100px;
  padding-top: 5px;

  font-size: 1.625rem;
  line-height: 1.15;

  white-space: pre-wrap;
  text-transform: uppercase;

  text-overflow: ellipsis;
  overflow: hidden;
`;
