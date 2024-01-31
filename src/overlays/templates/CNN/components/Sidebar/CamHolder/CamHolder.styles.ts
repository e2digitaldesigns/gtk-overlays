import styled from "styled-components";

export const CamHolderCNNWrapper = styled.div<{ hasVideo: boolean }>`
  position: absolute;
  top: 175px;
  left: 0px;
  width: 610px;
  height: 300px;

  border-width: ${props => (props.hasVideo ? "1px" : "0px")};
  border-top-style: solid;
  border-top-color: ${props => props.theme.colors.accent3};

  z-index: 1;
`;
