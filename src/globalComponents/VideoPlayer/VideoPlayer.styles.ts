import styled from "styled-components";

interface VideoPlayerProps {
  top: string;
  left: string;
  width: string;
  height: string;

  bgColor: string;
  border: string;
  shadow: boolean;
  isFullscreen: boolean;
  transitionOnMove: boolean;
}

export const VideoPlayerWrapper = styled.div<VideoPlayerProps>`
  border: ${props => (props.isFullscreen ? "0" : props.border)};
  /* box-sizing: content-box !important; */

  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.bgColor};
  /* transition: opacity, top, left, width, height, 0.5s ease-in-out; */
  z-index: 9999;
  opacity: 0;

  transition: ${props =>
    props.transitionOnMove
      ? "opacity, top, left, width, height, 0.25s ease-in-out"
      : " opacity 0.25s ease-in-out "};

  box-shadow: ${props =>
    props.shadow ? "0px 0px 20px 0px rgba(0,0,0,0.75)" : "none"};
`;

export const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
