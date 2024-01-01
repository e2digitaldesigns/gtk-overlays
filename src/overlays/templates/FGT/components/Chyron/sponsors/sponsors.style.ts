import styled from "styled-components";

export const SponsorsWrapper = styled.div`
  background-color: ${props => props.theme.colors.bg3};
  border-left: 0.125rem solid ${props => props.theme.colors.accent1};

  width: 300px;
  height: 140px;
  right: 0;
  top: 60px;
  position: absolute;
  z-index: 1;

  img {
    object-fit: cover;
  }
`;
