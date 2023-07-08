import styled from "styled-components";

interface VideoPlayerProps {
  top: string;
  left: string;
  width: string;
  height: string;
}

export const VideoPlayer = styled.video<VideoPlayerProps>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.width};
  height: ${props => props.height};
  opacity: 0;
  background-color: black;
  transition: opacity, top, left, width, height, 0.5s ease-in-out;
  z-index: 9999;
`;
