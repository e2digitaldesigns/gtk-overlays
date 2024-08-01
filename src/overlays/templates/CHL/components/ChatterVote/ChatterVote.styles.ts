import styled from "styled-components";

export const ChatterVoteWrapper = styled.div`
  position: absolute;

  right: 40px;
  top: 40px;

  height: 125px;
  width: 32.1875rem;
  overflow: hidden;
  background-color: ${props => props.theme.colors.bg1};
  /* border-bottom: 0.25rem solid ${props => props.theme.colors.accent1}; */
`;
