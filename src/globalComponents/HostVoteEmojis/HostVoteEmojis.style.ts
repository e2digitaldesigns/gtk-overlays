import styled, { Keyframes, keyframes } from "styled-components";

const upAndAway = (start: number, type: string, baseNum: number): Keyframes => {
  start = start > 5 ? start * 2.5 : 0 - start * 2.5;

  return keyframes`
 0% {
  opacity:0;
  
  }

  10% {
    opacity:1;
    right: ${baseNum - start}px;
  }

  25% {
    right: ${baseNum + start}px;
  }

  50%{
    right: ${baseNum - start}px;
    font-size: 1em;
  }

  75%{
    right: ${baseNum + start}px;  
  }

  100% {
    bottom: ${type === "remove" ? "-200px" : "300px"};
    opacity: 0;
    right: ${baseNum}px;
    font-size: .11em;
  }
`;
};

interface VoteFloatProps {
  fontSize: string;
  numberStr: number;
  speed: number;
  type: string;
  delay: number;
  right: number;
}
export const VoteFloat = styled.div<VoteFloatProps>`
  font-size: ${props => props.fontSize};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.625rem;

  position: absolute;
  bottom: 20px;
  right: ${props => `${props.right}px`};
  z-index: 0;

  animation: ${props => upAndAway(props.numberStr, props.type, props.right)}
    ${props => `${props.speed}s`} ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: ${props => `${props.delay}s`};
`;
