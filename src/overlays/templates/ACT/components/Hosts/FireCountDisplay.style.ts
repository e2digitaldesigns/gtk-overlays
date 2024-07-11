import styled from "styled-components";

export const FireCountWrapper = styled.div`
  position: absolute;
  left: 5px;
  top: 20px;

  width: 20px;
  overflow: hidden;
  padding: 5px;

  display: flex;
  flex-direction: column-reverse;
  gap: 5px;
`;

export const FireCountDiv = styled.div<{ isActive: number }>`
  width: 10px;
  height: 10px;
  background-color: ${props =>
    props.isActive ? props.theme.colors.accent1 : "rgba(255,255,255,0.6)"};
  transition: all 0.5s ease-in-out;
`;
