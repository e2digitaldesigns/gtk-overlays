import styled from "styled-components";

export const ShowChatWrapper = styled.div`
  position: absolute;
  left: 630px;
  top: 650px;

  width: 1280px;
  height: 100px;
  overflow: hidden;

  text-transform: uppercase;
  z-index: 1;

  border-left: 0.3125rem solid ${props => props.theme.colors.accent3};
`;
