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

export const HostWrapper = styled.div<HostWrapperProps>`
  position: absolute;
  width: 465px;
  height: 500px; /* animation top: 491px */
  height: 655px; /* animation top: 646px */
  left: ${props => seatingPosition[props.seat]};
  /* top: 335px; */
  bottom: 245px;

  border: 5px solid
    ${props =>
      props.leader ? props.theme.colors.accent1 : props.theme.colors.bg1};
  z-index: 10;
  /* box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5); */
`;

export const NameTag = styled.div`
  width: 340px;
  height: 40px;
  font-size: 1.25rem;
  text-transform: uppercase;
  padding: 0 0.625rem;
  background-color: ${props => props.theme.colors.bg1};
  border-left: 3px solid ${props => props.theme.colors.accent1};

  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 50;

  display: flex;
  align-items: center;
`;

export const VoteCount = styled.div`
  width: 65px;
  height: 40px;

  font-size: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.625rem;
  background-color: ${props => props.theme.colors.bg1};
  border-right: 3px solid ${props => props.theme.colors.accent1};

  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 50;
`;

const fadeOutAnimation = keyframes`
  0% { left: -4px; top: -4px; width: 3px; height: 3px;}
  13% { width: 12px;}
  25% { left: 456px; top: -4px; width: 3px; height: 3px;}
  38% { height: 12px;}
  50% { left: 456px; top: 646px; width: 3px; height: 3px;}
  63% { width: 12px;}
  75% { left: -4px; top: 646px; width: 3px; height: 3px;}
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
