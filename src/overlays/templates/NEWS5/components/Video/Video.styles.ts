import styled from "styled-components";

export const VideoBorderTop = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 185px;
  left: 10px;
  height: 1px;
  width: 610px;
  z-index: 10000;
  background-color: ${props => props.theme.colors.accent3};

  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  transition-delay: ${props => (props.isVisible ? ".5s" : 0)};
`;

export const VideoTopic = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 530px;
  left: 10px;
  height: 55px;
  width: 610px;
  z-index: 1;
  background-color: ${props => props.theme.colors.bg};

  border-bottom: 5px solid ${props => props.theme.colors.accent2};
  /* border-left: 5px solid ${props => props.theme.colors.accent3}; */
  border-top: 1px solid ${props => props.theme.colors.accent3};

  display: grid;
  grid-template-columns: 50px 1fr;

  padding: 10px;

  align-items: center;

  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 400;

  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: all 0.5s ease-in-out;
  transition-delay: ${props => (props.isVisible ? ".5s" : 0)};
`;
