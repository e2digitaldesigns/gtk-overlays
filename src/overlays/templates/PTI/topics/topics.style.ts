import styled from "styled-components";

interface ITopicWrapper {
  isVisible: boolean;
}

export const TopicWrapper = styled.div<ITopicWrapper>`
  width: 400px;
  height: 860px;
  top: 0px;
  left: 1520px;
  position: absolute;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.9);
  border-left: 1px solid black;

  * {
    font-family: BebasNeue;
    font-size: 38px;
    color: white;
    text-shadow: 1px 2px #000;
  }

  opacity: ${props => (props.isVisible ? "1" : "0")};
`;
