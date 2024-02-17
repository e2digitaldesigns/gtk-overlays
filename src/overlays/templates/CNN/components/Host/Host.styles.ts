import styled, { keyframes } from "styled-components";

export const HostWrapper = styled.div`
  width: 1280px;
  height: 630px;

  position: absolute;
  top: 10px;
  left: 630px;
  z-index: 10;

  border: 5px solid ${props => props.theme.colors.accent1};
`;

export const VoteDisplay = styled.div`
  width: 60px;
  height: 35px;
  font-size: 1.25rem;

  position: absolute;
  bottom: 20px;
  left: 15px;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.bg2};
  border-right: 3px solid ${props => props.theme.colors.accent3};
`;

export const EmojiPlacement = styled.div`
  width: 60px;
  height: 35px;
  font-size: 24px;

  position: absolute;
  bottom: 5px;
  left: 30px;
  z-index: 8;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HostNameWrapper = styled.div`
  width: 390px;
  height: 35px;
  font-size: 24px;

  position: absolute;
  bottom: 20px;
  left: 75px;
  z-index: 8;
  padding-left: 10px;

  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.bg3};
`;

export const HostNameWrapperName = styled.div`
  text-transform: uppercase;
  font-size: 1.25rem;
`;

const animationOut = keyframes`
  0% {
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
`;

export const HostWrapperGlow = styled.div`
  width: 1280px;
  height: 630px;
  display: none;

  position: absolute;
  top: 10px;
  left: 630px;
  z-index: 12;

  border: 5px solid ${props => props.theme.colors.accent3};

  animation-name: ${animationOut};
  animation-duration: 30s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;
