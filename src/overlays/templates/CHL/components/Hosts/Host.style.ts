import styled, { keyframes } from "styled-components";

const rotate1 = keyframes`
  50% {
    transform: rotate(-360deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

interface IntHostBoxWrapper {
  position: number;
}

const borderSize = "18px";

const hostBoxPosition = (position: number) => {
  if (position === 1) return "left: 40px;";
  if (position === 2) return "left: 663px;";
  if (position === 3) return "right: 40px;";
};

export const HostBoxWrapper = styled.div<IntHostBoxWrapper>`
  position: absolute;
  bottom: 310px;
  width: 595px;
  height: 545px;
  ${props => hostBoxPosition(props.position)};
`;

const DefaultBoxStroke = styled.div`
  position: absolute;
  z-index: 999;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.accent1};
`;

export const HostBoxStroke = styled(DefaultBoxStroke)`
  width: calc(100% - ${borderSize});
  height: calc(100% - ${borderSize});
  top: calc(${borderSize} / 2);
  left: calc(${borderSize} / 2);
`;

export const NameTag = styled.div`
  width: 425px;
  height: 40px;
  font-size: 1.25rem;
  text-transform: uppercase;
  padding: 0 0.625rem;
  background-color: ${props => props.theme.colors.bg1};
  border-right: 3px solid ${props => props.theme.colors.accent1};

  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 50;
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

  border-bottom: 3px solid ${props => props.theme.colors.accent1};

  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 50;
`;

export const HostBoxDefault = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0;

  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.5);
`;

export const HostBox = styled(HostBoxDefault)`
  background-color: #1c1b29;

  clip-path: polygon(
    0% 0%,
    0 100%,
    10px calc(100% - 10px),
    10px 10px,
    calc(100% - 10px) 10px,
    calc(100% - 10px) calc(100% - 10px),
    0 calc(100% - 10px),
    0 100%,
    100% 100%,
    100% 0%
  );
`;
interface IntHostBoxInner {
  position: number;
}

export const HostBoxInner = styled.div<IntHostBoxInner>`
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
    width: 200%;
    position: absolute;
    left: -50%;
    top: -50%;
    animation: ${rotate1} infinite ease-in-out;

    animation-delay: ${props => (props.position === 2 ? "3s" : "0")};
    animation-duration: ${props => (props.position === 2 ? "80s" : "70s")};
  }

  :after {
    content: "";
    width: calc(100% - ${borderSize});
    height: calc(100% - ${borderSize});
    position: absolute;
    background-color: green;
    top: calc(${borderSize} / 2);
    left: calc(${borderSize} / 2);
  }
`;

export const FireWrapper = styled.div`
  width: 590px;
  height: 330px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  overflow: hidden;
`;
