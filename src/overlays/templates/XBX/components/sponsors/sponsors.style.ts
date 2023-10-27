import styled from "styled-components";

export const SponsorsWrapper = styled.div`
  background-color: ${props => props.theme.colors.bg1};
  border: 1px solid ${props => props.theme.colors.accent2};

  width: 390px;
  height: 230px;
  left: 1395px;
  top: 740px;
  position: absolute;
  z-index: 1;

  img {
    object-fit: cover;
  }
`;
