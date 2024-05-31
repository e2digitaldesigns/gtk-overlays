import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 html,
body {
  color: white;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  white-space: nowrap;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
`;

export const Container = styled.div`
  width: 1920px;
  height: 1080px;
  position: relative;
  overflow: hidden;
`;
