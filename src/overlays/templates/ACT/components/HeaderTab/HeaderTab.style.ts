import styled from "styled-components";

export const HeaderTab = styled.div`
  background: linear-gradient(
    180deg,
    ${props => props.theme.colors.accent3} 0%,
    ${props => props.theme.colors.accent1} 50%
  );
  background-color: ${props => props.theme.colors.accent1};
  border-width: 2px 8px 2px 2px;
  border: 2px solid ${props => props.theme.colors.accent2};
  box-shadow: inset 3px 4px 5px rgba(0, 0, 0, 0.5);
  height: 3.125rem;
  left: 20px;
  padding: 0 0.625rem 0 1rem;
  position: absolute;
  top: 25px;
  width: 32.1875rem;

  transform: skew(-30deg);
  > * {
    transform: skew(30deg);
  }

  z-index: 2;
`;

export const Location = styled.div`
  height: 3.125rem;
  display: flex;
  align-items: center;
  padding-left: 0.625rem;
  font-size: 1.75rem;
  text-transform: uppercase;
`;
