import styled from "styled-components";

export const VotingWrapper = styled.div<{ isVisible: boolean }>`
  position: absolute;
  right: ${props => (props.isVisible ? "10px" : "-620px")};
  bottom: 300px;
  width: 640px;
  height: 110px;

  background-color: ${props => props.theme.colors.bg1};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: all 1s ease-in-out;
  z-index: 15;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.65);
`;

const LabelTab = styled.div`
  position: absolute;
  top: 0px;

  width: calc(50% - 20px);
  height: 35px;

  display: flex;
  align-items: center;

  background-color: ${props => props.theme.colors.accent1};
  padding: 0 10px;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 400;
  overflow: hidden;
`;

export const LabelTabLeft = styled(LabelTab)`
  left: 0px;
  border-right: 2px solid ${props => props.theme.colors.accent1};
  justify-content: right;
`;

export const LabelTabRight = styled(LabelTab)`
  right: 0px;
  border-left: 2px solid ${props => props.theme.colors.accent1};
  justify-content: left;
`;

const VotingContent = styled.div<{ isWinning?: boolean }>`
  position: absolute;
  top: 35px;
  width: calc(50% - 20px);
  height: 70px;
  font-size: 3rem;
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;

export const VotingContentLeft = styled(VotingContent)`
  left: 0px;
  justify-content: right;
  border-right: 1px solid ${props => props.theme.colors.accent1};
`;

export const VotingContentRight = styled(VotingContent)`
  right: 0px;
  justify-content: left;
  border-left: 1px solid ${props => props.theme.colors.accent1};
`;
