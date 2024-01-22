import styled from "styled-components";

export const ShowChatWrapper = styled.div`
  position: absolute;
  left: 700px;
  top: 650px;

  height: 70px;
  width: 1210px;
  overflow: hidden;

  z-index: 1;
  background-color: ${props => props.theme.colors.accent1};
`;

export const ShowChatStarter = styled.div`
  position: absolute;
  left: 630px;
  top: 650px;

  height: 70px;
  width: 70px;
  overflow: hidden;
  z-index: 1;
  background-color: ${props => props.theme.colors.accent1};

  ::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;

    width: 70px;
    height: 100%;

    background-color: ${props => props.theme.colors.accent3};
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  }
`;
