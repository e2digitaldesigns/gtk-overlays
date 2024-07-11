import styled from "styled-components";

export const TimingWrapper = styled.div`
  height: 45px;
  width: 225px;
  position: absolute;
  top: 0;
  left: 50px;
  background-color: ${props => props.theme.colors.accent1};
  border-right: 0.375rem solid ${props => props.theme.colors.accent2};

  display: flex;
  align-items: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 0.25rem 1.5rem;

  overflow: hidden;

  display: flex;
  align-items: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 0.25rem 1.5rem;

  transform: skew(-30deg);
  > * {
    transform: skew(30deg);
  }
`;
