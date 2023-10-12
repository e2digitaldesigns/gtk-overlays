import styled, { keyframes } from "styled-components";

const scroll = (width: number) => keyframes`
0% {  
    transform: translateX(-${width}px);
}
100% {
   transform: translateX(0);
}`;

interface ContainerProps {
  bgColor: string;
  isVisible: boolean;
}

export const ScrollContainer = styled.div<ContainerProps>`
  height: 1080px;
  width: 1920px;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.bgColor};

  text-transform: uppercase;
  opacity: ${props => (props.isVisible ? "1" : "0")};
  transition: opacity, 0.5s ease-in-out;
`;

export const SampleWord = styled.div`
  position: absolute;
  top: -500px;
  left: -500px;
  width: fit-content;
  white-space: nowrap;
`;

interface ScrollItemProps {
  posTop?: number;
  totalWidth: number;
  gap: number;
  reverse: boolean;
  speed: string;
}

export const ScrollLine = styled.div<ScrollItemProps>`
  position: absolute;
  top: ${props => (props?.posTop ? props.posTop : "0")}px;
  left: 0px;
  display: flex;
  gap: ${props => props.gap}px;

  animation-name: ${props => scroll(props.totalWidth)};
  animation-duration: ${props => props.speed};
  animation-timing-function: linear;
  animation-direction: ${props => (props.reverse ? "reverse" : "normal")};
  animation-iteration-count: infinite;
`;
