import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% {
    transform: rotate(-360deg);
  }
`;

interface IntHostBox {
  position: 1 | 2;
}

const DefaultBoxStroke = styled.div`
  position: absolute;
  z-index: 999;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.accent1};
`;

export const HostBox = styled.div<IntHostBox>`
  width: 900px;
  height: 610px;
  background-color: transparent;
  background-color: #1c1b29;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 140px;
  left: ${props => (props.position === 1 ? "50px" : "970px")};
`;

export const HostBoxStroke1 = styled(DefaultBoxStroke)`
  width: 880px;
  height: 590px;
  top: 150px;
  left: 60px;
`;

export const HostBoxStroke2 = styled(HostBoxStroke1)`
  left: 980px;
`;

export const NameTag1 = styled.div`
  width: 260px;
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

export const NameTag2 = styled(NameTag1)`
  border-right: 0;
  border-left: 0.3125rem solid ${props => props.theme.colors.accent1};
  left: auto;
  right: 20px;
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
    width: 200%;
    position: absolute;
    left: -50%;
    top: -50%;
    animation: ${rotate} 30s infinite linear;
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

export const HostBoxThin = styled.div`
  width: 625px;
  height: 610px;
  background-color: transparent;
  background-color: #1c1b29;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 140px;
  left: 50px;
`;

export const HostBoxThinStroke = styled(DefaultBoxStroke)`
  width: 605px;
  height: 590px;
  top: 150px;
  left: 60px;
`;

export const NameTagThin = styled(NameTag1)`
  border-right: 0;
  border-left: 0.3125rem solid ${props => props.theme.colors.accent1};
`;

const videoBoxWidth = "1175px";
const videoBoxHeight = 1175 * 0.5625 + "px"; // 660.9375
//610

export const VideoBox = styled.div`
  width: ${videoBoxWidth};
  height: ${videoBoxHeight};
  background-color: transparent;
  background-color: #1c1b29;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 115px;
  right: 50px;
`;

export const VideoBoxStroke = styled(DefaultBoxStroke)`
  width: calc(${videoBoxWidth} - 20px);
  height: calc(${videoBoxHeight} - 20px);
  top: 125px;
  left: 705px;
`;

export const VideoBoxInner = styled(HostBoxInner)`
  :before {
    height: calc(${videoBoxWidth} * 2);
    width: calc(${videoBoxWidth} * 2);
    top: calc(50% - ${videoBoxWidth});
    left: calc(50% - ${videoBoxWidth});
    animation: ${rotate} 60s infinite linear;
  }
`;

export const NameTagVideo = styled(NameTag1)`
  left: auto;
  right: 20px;
  border-right: 0;
  border-left: 0.3125rem solid ${props => props.theme.colors.accent1};
`;

const videoBoxSmallerWidth = "1080px";
const videoBoxSmallerHeight = 1080 * 0.5625 + "px";

export const VideoBoxSmaller = styled.div`
  width: ${videoBoxSmallerWidth};
  height: 610px;
  background-color: #1c1b29;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 140px;
  left: 420px;
`;

export const VideoBoxSmallerStroke = styled(DefaultBoxStroke)`
  width: 1060px;
  height: 590px;
  top: 150px;
  left: 430px;
`;

export const HostVideoBoxThinLeft = styled.div`
  width: 350px;
  height: 610px;
  background-color: #1c1b29;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 140px;
  left: 50px;
`;

export const HostVideoBoxThinLeftStroke = styled(DefaultBoxStroke)`
  width: 330px;
  height: 590px;
  top: 150px;
  left: 60px;
`;

export const HostVideoBoxThinRight = styled.div`
  width: 350px;
  height: 610px;
  background-color: #1c1b29;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 140px;
  right: 50px;
`;

export const HostVideoBoxThinRightStroke = styled(HostVideoBoxThinLeftStroke)`
  left: 1530px;
`;
