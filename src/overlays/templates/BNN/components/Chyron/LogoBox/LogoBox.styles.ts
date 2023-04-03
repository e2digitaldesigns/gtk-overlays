import styled from "styled-components";

export const LogoBox = styled.div`
  width: 230px;
  height: 135px;
  position: absolute;
  top: 0;
  left: 0px;
  background-color: ${props => props.theme.colors.bg1};

  padding: 0.625rem;
  border: 0.125rem solid ${props => props.theme.colors.accent1};
  border-bottom: 0.125rem solid ${props => props.theme.colors.accent1};

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;
