import styled from "styled-components";

interface IImageHolder {
  color?: string;
}
export const ImageHolder = styled.div<IImageHolder>`
  position: absolute;
  left: 50px;
  bottom: 50px;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background-color: green;
  background-color: transparent;
  border: 10px solid ${props => props.color || props.theme.colors.accent1};
  box-shadow: 5px 5px 15px 5px #000000;
  z-index: 50;
  overflow: hidden;

  > img {
    width: 190px;
    height: 190px;
  }
`;
