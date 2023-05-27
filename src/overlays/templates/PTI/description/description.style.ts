import styled from "styled-components";

const bgColor = "#a15004";
interface IDescription {
  isVisible: boolean;
}

export const DescriptionDiv = styled.div<IDescription>`
  color: white;
  font-family: "Bebas Neue";
  font-size: 48px;
  height: 120px;
  left: 0;
  line-height: 48px;
  overflow: hidden;
  padding: 10px 20px;
  position: absolute;
  text-shadow: 1px 2px #000;
  top: 860px;
  white-space: pre-wrap;
  width: 1520px;
  background-color: transparent;
  opacity: ${props => (props.isVisible ? "1" : "0")};
`;

export const DescriptionDivBacker = styled(DescriptionDiv)<IDescription>`
  background-size: cover;
  background-color: ${bgColor};

  &:before {
    position: absolute;
    content: "";
    inset: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0) 60%
    );
  }

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${bgColor};
    height: 400%;
    clip-path: ellipse(77% 19% at 73% 24%);
  }
`;
