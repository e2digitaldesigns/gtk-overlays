import styled from "styled-components";

export const VotingWrapper = styled.div<{ isVisible: boolean }>`
  position: absolute;
  left: 10px;
  top: 895px;
  width: 610px;
  height: 110px;

  background-color: ${props => props.theme.colors.bg3};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: all 1s ease-in-out;
  z-index: 1;
`;

const LabelTab = styled.div`
  position: absolute;
  top: 0px;

  width: 250px;
  height: 35px;

  display: flex;
  align-items: center;

  background-color: ${props => props.theme.colors.bg2};
  padding: 0 10px;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 400;
  overflow: hidden;
`;

export const LabelTabLeft = styled(LabelTab)`
  left: 0px;
  border-right: 2px solid ${props => props.theme.colors.accent3};
`;

export const LabelTabRight = styled(LabelTab)`
  right: 0px;
  border-left: 2px solid ${props => props.theme.colors.accent3};
  justify-content: right;
`;

const VotingContent = styled.div<{ isWinning?: boolean }>`
  position: absolute;
  top: 35px;
  width: 305px;
  height: 70px;
  font-size: 3rem;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: ${props =>
    props.isWinning ? props.theme.colors.font1 : props.theme.colors.font2};
`;

export const VotingContentLeft = styled(VotingContent)`
  left: 0px;
  justify-content: right;
  border-right: 1px solid ${props => props.theme.colors.border1};
`;

export const VotingContentRight = styled(VotingContent)`
  right: 0px;
  justify-content: left;
  border-left: 1px solid ${props => props.theme.colors.border1};
`;
