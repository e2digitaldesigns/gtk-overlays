import styled from "styled-components";

interface VideoPlayerProps {
  top: string;
  left: string;
  width: string;
  height: string;

  border: string;
  shadow: boolean;
}

export const VideoPlayer = styled.video<VideoPlayerProps>`
  border: ${props => props.border};
  box-sizing: content-box !important;

  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.width};
  height: ${props => props.height};
  opacity: 0;
  background-color: black;
  transition: opacity, top, left, width, height, 0.5s ease-in-out;
  z-index: 9999;

  box-shadow: ${props =>
    props.shadow ? "0px 0px 20px 0px rgba(0,0,0,0.75)" : "none"};
`;
