import styled from "styled-components";
import bg from "../../../../assets/images/1520x20-desc-gradient.png";

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
  background-size: cover;
  background-color: #a15004;
  background-image: url(${bg});

  opacity: ${props => (props.isVisible ? "1" : "0")};
`;
