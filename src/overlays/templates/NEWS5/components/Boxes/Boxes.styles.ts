import styled from "styled-components";

export const BoxGrid = styled.div`
  position: absolute;
  top: 730px;
  left: 630px;
  width: 1280px;
  height: 630px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const Box = styled.div`
  width: 420px;
  height: 275px;

  background-color: ${props => props.theme.colors.bg3};
`;
