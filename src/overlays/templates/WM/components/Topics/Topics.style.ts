import styled from "styled-components";

export const TopicWrapper = styled.div`
  position: absolute;
  left: 260px;
  bottom: 120px;

  width: 580px;
  height: 100px;

  overflow: hidden;
  z-index: 50;
`;

interface ITopicGrid {
  isActive?: boolean;
}
export const TopicGrid = styled.div<ITopicGrid>`
  position: absolute;
  left: ${props => (props.isActive ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  color: white;
  font-family: "Bebas Neue";

  transition: left 1s;
  > div:first-child {
    font-size: 36px;
  }

  > div:last-child {
    font-size: 60px;
    line-height: 40px;
  }
`;
