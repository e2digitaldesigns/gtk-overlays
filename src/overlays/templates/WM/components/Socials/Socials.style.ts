import styled from "styled-components";

export const Socials = styled.div`
  position: absolute;
  left: 200px;
  bottom: 75px;
  width: 500px;
  height: 60px;

  display: grid;
  grid-template-columns: 60px 1fr;
  grid-column-gap: 4px;
  align-items: center;

  color: white;
  z-index: 9999;
`;

interface IIconHolder {
  bgColor?: string;
}
export const IconHolder = styled.div<IIconHolder>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => (props.bgColor ? props.bgColor : "black")};
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.75s;
`;

export const TextHolder = styled.div`
  font-size: 24px;
  width: 500px;
  height: 28px;
  overflow: hidden;
`;
