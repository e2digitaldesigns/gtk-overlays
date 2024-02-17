import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  top: 760px;
  left: 1485px;
  width: 425px;
  height: 245px;

  padding: 0.5rem;
  background-color: ${props => props.theme.colors.bg3};
  border-top: 1px solid ${props => props.theme.colors.accent3};
`;

export const ChatBox = styled.div`
  position: absolute;
  top: 760px;
  left: 630px;
  width: 845px;
  height: 245px;

  padding: 0.5rem;
  background-color: ${props => props.theme.colors.bg3};
  border-top: 1px solid ${props => props.theme.colors.accent3};
`;
