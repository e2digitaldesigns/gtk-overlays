import styled from "styled-components";

export const Socials = styled.div`
  position: absolute;
  left: 360px;
  bottom: 70px;

  width: 375px;
  height: 50px;
  background-color: #24082e;

  display: grid;
  grid-template-columns: 60px 1fr;
  grid-column-gap: 4px;
  align-items: center;

  color: white;
  z-index: 50;
`;

interface IIconHolder {
  bgColor?: string;
}
export const IconHolder = styled.div<IIconHolder>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextHolder = styled.div`
  font-size: 22px;
  text-transform: uppercase;
  width: 300px;
  height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TriangleRight = styled.div`
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;

  border-left: 25px solid #24082e;

  position: absolute;
  left: 735px;
  bottom: 70px;
  z-index: 50;
`;
