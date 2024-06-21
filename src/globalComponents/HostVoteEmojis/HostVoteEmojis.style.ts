import styled, { Keyframes, keyframes } from "styled-components";

const upAndAway = (start: number, type: string): Keyframes => {
  const dirArray =
    Math.floor(start) % 2
      ? ["+", "-", "+", "-", "+"]
      : ["-", "+", "-", "+", "-"];

  start = start * 2.5;

  const yT: { [key: number]: { [key: string]: string } } = {
    20: { add: "-75px", remove: "50px", super: "-150px" },
    40: { add: "-125px", remove: "100px", super: "-50px" },
    60: { add: "-175px", remove: "75px", super: "-250px" },
    80: { add: "-125px", remove: "125px", super: "-350px" },
    100: { add: "-275px", remove: "200px", super: "-450px" }
  };

  return keyframes`
 0% {
  opacity:0;
  }

  10% {
    opacity:1;
    transform: translateX(${dirArray[0]}${start}px) translateY(0);
  }

  20% {
    transform: translateX(${dirArray[1]}${start}px) translateY(${yT[20][type]});
  }

  40% {
    transform: translateX(${dirArray[2]}${start}px) translateY(${yT[40][type]});
    font-size: 1em;
  }

  60% {
    transform: translateX(${dirArray[3]}${start}px) translateY(${yT[60][type]});
  }

  80% {
    transform: translateX(${dirArray[4]}${start}px) translateY(${yT[80][type]});
  }

  100% {
    opacity: 0;
      transform: translateX(0) translateY(${yT[100][type]});
      font-size: .11em;
  }
`;
};

interface VoteFloatProps {
  bottom: number;
  delay: number;
  fontSize: string;
  right: number;
  speed: number;
  start: number;
  type: string;
}
export const VoteFloat = styled.div<VoteFloatProps>`
  font-size: ${props => props.fontSize};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.625rem;

  position: absolute;
  bottom: ${props => `${props.bottom}px`};
  right: ${props => `${props.right}px`};
  z-index: 1;

  animation: ${props => upAndAway(props.start, props.type)}
    ${props => `${props.speed}s`} ease-in-out;

  animation-fill-mode: forwards;
  animation-delay: ${props => `${props.delay}s`};
`;
