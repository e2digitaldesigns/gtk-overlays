import styled from "styled-components";

export const ChatBox = styled.div`
  position: absolute;
  top: 760px;
  left: 630px;
  width: 1280px;
  height: 245px;

  padding: 0.5rem;
  background-color: ${props => props.theme.colors.bg3};
  border-top: 1px solid ${props => props.theme.colors.accent3};
`;
