import styled, { keyframes } from "styled-components";

const fadeOutAnimation = keyframes`
  20% { opacity: 1; }
  75% { opacity: .9; }
  100% { opacity: 0; bottom: 70%; font-size: 1rem}
`;

interface EmojiDivProps {
  fontSize: string;
  left: string;
  speed: string;
}

export const EmojiDiv = styled.div.attrs<EmojiDivProps>(props => ({
  style: {
    left: props.left,
    animationDuration: props.speed
  }
}))<EmojiDivProps>`
  font-size: ${props => props.fontSize};
  opacity: 0;
  position: absolute;
  bottom: 0;
  animation: ${fadeOutAnimation} ease-in forwards;
`;

export const EmojiDivX = styled.div<EmojiDivProps>`
  font-size: 2.5rem;
  opacity: 0;
  width: fit-content;
  height: fit-content;

  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: ${props => props.left};
  animation: ${fadeOutAnimation} ${props => props.speed} ease-in forwards;
`;

export const EmojiWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

// https://streamlabs.com/alert-box/v3/9E0D84B5BD123FF795C0
