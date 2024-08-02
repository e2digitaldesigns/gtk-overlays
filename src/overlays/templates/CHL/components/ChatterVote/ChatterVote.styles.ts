import styled from "styled-components";

export const ChatterVoteWrapper = styled.div<{ showVotes: boolean }>`
  position: absolute;

  right: ${props => (props.showVotes ? "40px" : "-555px")};
  top: 40px;

  height: 125px;
  width: 32.1875rem;
  overflow: hidden;
  background-color: ${props => props.theme.colors.bg1};
  transition: right 0.5s ease-in-out;
`;
