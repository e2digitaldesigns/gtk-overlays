import styled from "styled-components";

export const TimingWrapper = styled.div`
  height: 45px;
  width: 220px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colors.accent1};
  border-right: 3px solid ${props => props.theme.colors.accent2};

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.25rem 0.625rem;
`;
