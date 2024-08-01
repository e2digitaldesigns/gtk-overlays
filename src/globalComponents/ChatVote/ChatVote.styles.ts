import styled from "styled-components";

export const VoteContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

interface IVoteItemProps {
  borderBottom: string;
  fontSize: string;
  height: number;
  top: number;
  zIndex: number;
  nameColor: string;
  voteColor: string;
}

export const VoteItem = styled.div<IVoteItemProps>`
  border-bottom: ${props => props.borderBottom};
  display: grid;
  grid-template-columns: 1fr 4rem;
  height: ${props => props.height}px;
  padding: 0;
  position: absolute;
  top: ${props => props.top}px;
  transition: top 0.5s;
  width: 100%;
  z-index: ${props => props.zIndex};
  font-size: ${props => props.fontSize};
  align-items: center;
`;

interface IVoteItemChildProps {
  color: string;
  bgColor: string;
}

export const VoteItemName = styled.div<IVoteItemChildProps>`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 0.5rem;
  text-align: left;
  overflow: hidden;
  > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const VoteItemVotes = styled.div<IVoteItemChildProps>`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
