import { keyframes } from "styled-components";

export const scrollLeftIn = keyframes`
 0% {
    right:-100%;
  }

  100% {
    right:0px;
  }
`;

export const scrollLeftOut = keyframes`
 0% {
    right:0px;
  }

  100% {
    right:100%;
  }
`;

export const scrollDownIn = keyframes`
 0% {
    top:-100%;
    opacity: 1;
  }

  100% {
    top:0px;
    opacity: 1;
  }
`;

export const scrollDownOut = keyframes`
  0% {
    top:0px;
    opacity: 1;
  }

  100% {
    top:100%;
    opacity: 1;
  }
`;

export const fadeIn = keyframes`
 0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
