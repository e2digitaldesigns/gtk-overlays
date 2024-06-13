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
  zIndex: number;
}

export const VideoPlayerWrapper = styled.div<VideoPlayerProps>`
  border: ${props => props.border};
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.bgColor};
  z-index: ${props => props.zIndex};
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

export const ImagePlayer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
