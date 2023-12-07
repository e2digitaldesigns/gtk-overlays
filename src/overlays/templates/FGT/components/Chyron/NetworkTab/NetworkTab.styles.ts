import styled from "styled-components";

export const NetworkTab = styled.div`
  height: 45px;
  width: 745px;
  position: absolute;
  top: 0;
  left: 105px;
  background-color: ${props => props.theme.colors.accent1};

  display: flex;
  align-items: center;
  font-size: 1.75rem;
  text-transform: uppercase;
  padding: 0.25rem 0.625rem;
`;
