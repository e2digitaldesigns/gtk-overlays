import styled from "styled-components";

export const NetworkTab = styled.div`
  height: 45px;
  width: 375px;
  position: absolute;
  top: 0;
  left: 0px;
  background-color: ${props => props.theme.colors.accent1};

  display: flex;
  align-items: center;
  font-size: 1.75rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.25rem 0.625rem;
`;
