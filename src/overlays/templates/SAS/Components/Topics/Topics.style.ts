import styled from "styled-components";

export const TopicWrapper = styled.div`
  position: absolute;
  left: 360px;
  bottom: 120px;

  width: 1035px;
  height: 130px;
  background-color: #562154;

  background: linear-gradient(
    270deg,
    rgba(82, 10, 135, 1) 0%,
    rgba(86, 33, 84, 1) 100%
  );

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
  padding-left: 20px;

  display: flex;
  align-items: center;

  transition: left 1s;
  > div {
    > div:first-child {
      font-size: 42px;
    }

    > div:last-child {
      font-size: 60px;
      line-height: 40px;
    }
  }
`;
