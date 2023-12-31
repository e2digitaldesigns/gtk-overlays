import styled from "styled-components";

export const TimingWrapper = styled.div`
  height: 60px;
  width: 105px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colors.accent1};
  border-right: 0.125rem solid ${props => props.theme.colors.bg1};

  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  padding: 0.25rem 0.625rem;
`;
