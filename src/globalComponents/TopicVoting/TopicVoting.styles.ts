import styled from "styled-components";

export const VotingWrapper = styled.div<{
  bgColor: string;
  isVisible: boolean;
}>`
  position: absolute;
  left: ${props => (props.isVisible ? "0px" : "100%")};
  bottom: 0px;
  width: 100%;
  height: 100%;

  background-color: ${props => props.bgColor};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: all 1s ease-in-out;
  z-index: 15;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.65);
`;

const LabelTab = styled.div<{ accentColor: string }>`
  position: absolute;
  top: 0px;

  width: calc(50% - 20px);
  height: 35px;

  display: flex;
  align-items: center;

  background-color: ${props => props.accentColor};
  padding: 0 10px;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 400;
  overflow: hidden;
`;

export const LabelTabLeft = styled(LabelTab)`
  left: 0px;
  border-right: 2px solid ${props => props.accentColor};
  justify-content: right;
`;

export const LabelTabRight = styled(LabelTab)`
  right: 0px;
  border-left: 2px solid ${props => props.accentColor};
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

interface VotingContentProps {
  accentColor: string;
}

export const VotingContentLeft = styled(VotingContent)<VotingContentProps>`
  left: 0px;
  justify-content: right;
  border-right: 1px solid ${props => props.accentColor};
`;

export const VotingContentRight = styled(VotingContent)<VotingContentProps>`
  right: 0px;
  justify-content: left;
  border-left: 1px solid ${props => props.accentColor};
`;
