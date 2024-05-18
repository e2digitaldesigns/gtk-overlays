import styled from "styled-components";

export const TopicImageWrapper = styled.div`
  box-sizing: border-box;
  width: 940px;
  height: 535px;
  position: absolute;
  top: 180px;
  left: 330px;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden;
`;

export const TopicImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

interface ITopicImageLi {
  liState: string;
}

export const TopicImageLi = styled.div<ITopicImageLi>`
  position: absolute;
  width: 100%;
  height: 100%;
  transition-property: all;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  opacity: ${props => (props.liState === "active" ? "1" : "0")};
  left: ${props => (props.liState === "active" ? "0" : "-100%")};
`;

export const TopicImageImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
