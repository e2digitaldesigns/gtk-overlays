import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% {
    transform: rotate(-360deg);
  }
`;

export const HostBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const HostBoxStroke = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);

  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 999;

  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.accent1};
`;

export const HostBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-color: #1c1b29;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const HostBoxInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  :before {
    content: "";
    background-image: conic-gradient(
      ${props => props.theme.colors.accent1} 20deg,
      transparent 120deg
    );
    height: 200%;
    width: 150%;
    position: absolute;
    left: -50%;
    top: -50%;
    animation: ${rotate} 60s infinite;
  }

  :after {
    content: "";
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    position: absolute;
    background-color: green;
    top: 10px;
    left: 10px;
  }
`;

export const NameTag = styled.div`
  width: 300px;
  height: 40px;

  font-size: 1.25rem;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  padding: 0 0.625rem;
  background-color: ${props => props.theme.colors.bg1};
  border-right: 0.3125rem solid ${props => props.theme.colors.accent1};

  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 50;
`;

interface IntHostHostVote {
  votePosition: string;
}

const setPosition: { [key: string]: string } = {
  tr: "top: 20px; right: 20px;",
  tl: "top: 20px; left: 20px;",
  br: "bottom: 20px; right: 20px;",
  bl: "bottom: 20px; left: 20px;"
};

export const HostVote = styled.div<IntHostHostVote>`
  width: 60px;
  height: 40px;

  font-size: 1.25rem;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.625rem;
  background-color: ${props => props.theme.colors.bg1};
  border-bottom: 0.3125rem solid ${props => props.theme.colors.accent1};

  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 50;

  ${props => setPosition[props.votePosition as string]};
`;
