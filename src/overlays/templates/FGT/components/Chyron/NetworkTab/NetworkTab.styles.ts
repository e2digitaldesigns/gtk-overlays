import styled from "styled-components";

export const NetworkTab = styled.div`
  height: 60px;
  width: 745px;
  position: absolute;
  top: 0;
  left: 105px;
  background-color: ${props => props.theme.colors.accent1};

  display: flex;
  align-items: center;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 0.25rem 0.625rem 0 0.625rem;
`;
