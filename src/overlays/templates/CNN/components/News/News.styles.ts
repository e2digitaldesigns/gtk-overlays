import styled from "styled-components";

export const NewsWrapper = styled.div`
  width: 1920px;
  height: 65px;

  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 10;

  text-transform: uppercase;
  background-color: ${props => props.theme.colors.accent1};

  display: grid;
  grid-template-columns: 10px 100px 1fr 10px;
`;

export const NewsHeader = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
  font-weight: 400;
  font-size: 22px;
  background-color: ${props => props.theme.colors.accent3};
`;
