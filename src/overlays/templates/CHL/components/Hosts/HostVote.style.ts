import styled, { Keyframes, keyframes } from "styled-components";

const upAndAway = (start: number): Keyframes => {
  start = start > 5 ? start * 2 : 0 - start * 2;

  return keyframes`
 0% {
  right: ${20 - start}px;
  }

  20% {
    opacity:1;
  }

  25% {
    right: ${20 + start}px;
  }

  50%{
    right: ${20 - start}px;
  }

  75%{
    right: ${20 + start}px;
  }

  100% {
    bottom: 400px;
    opacity: 0;
    right: 20px;
  }
`;
};

interface VoteFloatProps {
  numberStr: number;
}
export const VoteFloat = styled.div<VoteFloatProps>`
  width: 65px;
  height: 40px;

  font-size: 1.25rem;
  font-weight: ${props => props.numberStr};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.625rem;

  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 150;

  animation: ${props => upAndAway(props.numberStr)} 4s ease-in-out;
  animation-fill-mode: forwards;
`;
