import styled from "styled-components";

export const ChyronHeader = styled.div`
  background-color: ${props => props.theme.colors.accent1};
  display: grid;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: bold;

  align-content: center;
  justify-content: center;

  height: 50px;
  left: 105px;
  top: 1010px;
  width: 65px;
  position: absolute;
  z-index: 1;
`;

export const ChyronWrapper = styled.div`
  background-color: ${props => props.theme.colors.bg1};
  height: 50px;
  left: 170px;
  top: 1010px;
  width: 1650px;
  position: absolute;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  padding-left: 10px;
  z-index: 1;
  border-right: 5px solid ${props => props.theme.colors.accent1};
  text-transform: uppercase;
`;
