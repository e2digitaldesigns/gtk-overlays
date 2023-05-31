import styled, { keyframes } from "styled-components";

const fadeOutAnimation = keyframes`
  0% { opacity: 1; }
  75% { opacity: .9; }
  100% { opacity: 0; bottom: 70%; }
`;

interface EmoteDivProps {
  left: string;
  speed: number;
}

export const EmoteDiv = styled.div<EmoteDivProps>`
  font-size: 2.5rem;

  width: fit-content;
  height: fit-content;

  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: ${props => props.left};
  animation: ${fadeOutAnimation} ${props => props.speed}s ease-in forwards;

  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const EmoteWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

// https://streamlabs.com/alert-box/v3/9E0D84B5BD123FF795C0
