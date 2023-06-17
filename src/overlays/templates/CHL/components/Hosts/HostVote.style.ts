import styled, { keyframes } from "styled-components";

const upAndAway = keyframes`
 0% {
    opacity:0;
  }

  15% {
    opacity:1;
  }

  100% {
    bottom: 200px;
    opacity: 0;
  }
`;

export const VoteFloat = styled.div`
  width: 65px;
  height: 40px;

  font-size: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.625rem;

  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 500;

  animation: ${upAndAway} 3s ease-in-out;
  animation-fill-mode: forwards;
`;
