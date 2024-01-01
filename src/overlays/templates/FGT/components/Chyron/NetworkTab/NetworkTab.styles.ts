import styled from "styled-components";

export const NetworkTab = styled.div`
  height: 60px;
  width: 765px;
  position: absolute;
  top: 0;
  left: 130px;
  background-color: ${props => props.theme.colors.accent1};

  display: flex;
  align-items: center;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 0 0.625rem;
`;
