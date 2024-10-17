import styled from "styled-components";

export const ChatRankWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

interface ITopChatterGridProps {
  backgroundColor: string;
  borderBottomColor: string;
  height: string;
  top: string;
}

export const ChatRankGrid = styled.div<ITopChatterGridProps>`
  background-color: ${props => props.backgroundColor};
  border-bottom: 1px solid ${props => props.borderBottomColor};
  box-sizing: border-box;
  display: grid;
  grid-template-columns: ${props => props.height} 1fr 75px;
  height: ${props => props.height};
  position: absolute;
  top: ${props => props.top};
  transition: top 0.75s;
  width: 100%;
`;

interface IRankDiv {
  rankBgColor: string;
  rankFontColor: string;
  rankFontSize: string;
}

export const RankDiv = styled.div<IRankDiv>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  background-color: ${props => props.rankBgColor};
  color: ${props => props.rankFontColor};
  font-size: ${props => props.rankFontSize};
  overflow: hidden;

  img {
    width: 100%;
  }
`;

interface IUserDiv {
  userBgColor: string;
  userFontColor: string;
  userFontSize: string;
}

export const UserDiv = styled.div<IUserDiv>`
  display: flex;

  align-items: center;
  justify-content: left;
  padding: 5px 5px 5px 10px;
  overflow: hidden;
  background-color: ${props => props.userBgColor};

  > div {
    flex: 1;
    font-weight: bold;
    color: ${props => props.userFontColor};
    font-size: ${props => props.userFontSize};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

interface ICountDiv {
  countBgColor: string;
  countFontColor: string;
  countFontSize: string;
}

export const CountDiv = styled.div<ICountDiv>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  background-color: ${props => props.countBgColor};
  color: ${props => props.countFontColor};
  font-size: ${props => props.countFontSize};
`;

export const DemoButtonWrapper = styled.div`
  z-index: 1000;
  position: absolute;
  top: 520px;
  left: 0;
  background: black;
  width: 600px;
  height: 100px;
`;
