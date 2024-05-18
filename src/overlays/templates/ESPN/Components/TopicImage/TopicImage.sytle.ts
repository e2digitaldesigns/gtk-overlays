import styled from "styled-components";

export const TopicImageWrapper = styled.div`
  box-sizing: border-box;
  width: 940px;
  height: 535px;
  position: absolute;
  top: 180px;
  left: 320px;
  background-color: rgba(0, 0, 0, 0.9);
  border: 2px solid ${props => props.theme.colors.accent2};
  overflow: hidden;
`;

export const TopicImages = styled.div`
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
  transition-duration: 0.75s;
  transition-timing-function: ease-in-out;
  opacity: ${props => (props.liState === "active" ? "1" : "0")};
  left: ${props =>
    props.liState === "active"
      ? "0"
      : props.liState === "visited"
      ? "-100%"
      : "100%"};
`;

export const TopicImageImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
