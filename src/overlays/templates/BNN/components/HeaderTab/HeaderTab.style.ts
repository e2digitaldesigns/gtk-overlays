import styled from "styled-components";

export const HeaderTab = styled.div`
  height: 40px;
  width: 31.875rem;
  display: grid;
  grid-template-columns: 1fr 5.3125rem;
  background-color: ${props => props.theme.colors.bg1};
  border-left: 0.3125rem solid ${props => props.theme.colors.accent1};

  position: absolute;
  top: 20px;
  left: 1360px;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.625rem;
  font-size: 1.75rem;
  text-transform: uppercase;
`;

export const Live = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.accent1};
`;
