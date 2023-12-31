import styled, { keyframes } from "styled-components";

const seatingPosition: { [key: string]: string } = {
  "1": "15px",
  "2": "490px",
  "3": "965px",
  "4": "1440px"
};

interface HostWrapperProps {
  seat: string;
  leader?: boolean;
}

//655
const wrapperHeight = 595;

export const HostWrapper = styled.div<HostWrapperProps>`
  position: absolute;
  width: 465px;
  height: ${wrapperHeight}px; /* animation top = -9*/
  left: ${props => seatingPosition[props.seat]};
  bottom: 290px;

  border: 5px solid
    ${props =>
      props.leader ? props.theme.colors.accent1 : props.theme.colors.bg1};
  z-index: 10;
  /* box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5); */
`;

export const NameTag = styled.div`
  width: 435px;
  height: 50px;
  text-transform: uppercase;
  padding: 0 0.625rem 0 0;
  background-color: ${props => props.theme.colors.bg1};
  /* border-top: 3px solid ${props => props.theme.colors.accent1}; */

  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 50;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  align-items: center;
`;

export const NameTagText = styled.div`
  font-size: 2rem;
`;

export const VoteCountWrapper = styled.div`
  width: 65px;
  height: 100%;
  border-right: 3px solid ${props => props.theme.colors.accent1};
`;

export const VoteCount = styled.div`
  width: 65px;
  height: 100%;
  font-size: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.625rem;
  /* background-color: ${props => props.theme.colors.bg1}; */
`;

const fadeOutAnimation = keyframes`
  0% { left: -4px; top: -4px; width: 3px; height: 3px;}
  13% { width: 12px;}
  25% { left: 456px; top: -4px; width: 3px; height: 3px;}
  38% { height: 12px;}
  50% { left: 456px; top: ${wrapperHeight - 9}px; width: 3px; height: 3px;}
  63% { width: 12px;}
  75% { left: -4px; top: ${wrapperHeight - 9}px; width: 3px; height: 3px;}
  88% { height: 12px;}
  100% { left: -4px; top: -4px; width: 3px; height: 3px;}
`;

interface ScrollDotProps {
  delay: number;
}

export const ScrollDot = styled.div<ScrollDotProps>`
  width: 3px;
  height: 3px;
  position: absolute;
  left: -4000px;
  top: -4px;
  z-index: 100;
  background-color: ${props => props.theme.colors.accent1};

  animation: ${fadeOutAnimation};
  animation-duration: 10s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  animation-delay: ${props => `${props.delay}s`};

  &:nth-child(even) {
    animation-direction: alternate;
    box-shadow: 0px 1px 2px rgba(0, 255, 255, 0.5),
      0px 2px 4px rgba(0, 255, 255, 0.5), 0px 4px 8px rgba(0, 255, 255, 0.5),
      0px 8px 16px rgba(0, 255, 255, 0.5);
    background-color: transparent;
  }

  &:nth-child(odd) {
    animation-direction: alternate-reverse;
  }

  &:nth-child(3n) {
    animation-duration: 20s;
  }

  &:nth-child(5n) {
    animation-duration: 40s;
    background-color: ${props => props.theme.colors.hostAccent1};
  }

  &:nth-child(6n) {
    background-color: ${props => props.theme.colors.hostAccent2};
    animation-duration: 60s;
  }

  &:nth-child(7n) {
    background-color: ${props => props.theme.colors.hostAccent3};
    animation-duration: 80s;
  }
`;
