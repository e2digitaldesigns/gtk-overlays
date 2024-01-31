import styled from "styled-components";

export const BoxGrid = styled.div`
  position: absolute;
  top: 730px;
  left: 630px;
  width: 1280px;
  height: 275px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
`;

export const ChatBoxX = styled.div`
  height: 100%;
  padding: 0.5rem;
  background-color: ${props => props.theme.colors.bg3};
  border-top: 1px solid ${props => props.theme.colors.accent3};
`;

export const Box = styled.div`
  height: 100%;
  padding: 0.5rem;
  background-color: ${props => props.theme.colors.bg3};
  border-top: 1px solid ${props => props.theme.colors.accent3};
`;

export const ChatBox = styled.div`
  position: absolute;
  top: 730px;
  left: 630px;
  width: 845px;
  height: 275px;

  padding: 0.5rem;
  background-color: ${props => props.theme.colors.bg3};
  border-top: 1px solid ${props => props.theme.colors.accent3};
`;
