import React from "react";
import * as Styled from "./ChatRank.styles";
import { useQueryParams } from "../../hooks";

interface ITopChatProps {
  backgroundColor?: string;
  borderBottomColor?: string;
  count?: number;
  countBgColor?: string;
  countFontColor?: string;
  countFontSize?: string;
  rankBgColor?: string;
  rankFontColor?: string;
  rankFontSize?: string;
  showTopSpotImage?: boolean;
  topSpotCountFontSize?: string;
  topSpotFontSize?: string;
  topSpotHeight?: number;
  userBgColor?: string;
  userFontColor?: string;
  userFontSize?: string;
}

interface IUserState {
  username: string;
  messageCount: number;
  image: string;
}

const ChatRank: React.FC<ITopChatProps> = ({
  backgroundColor = "transparent",
  borderBottomColor = "#555",
  count = 3,
  countBgColor = "#222",
  countFontColor = "white",
  countFontSize = "24px",
  rankBgColor = "#111",
  rankFontColor = "white",
  rankFontSize = "24px",
  showTopSpotImage = true,
  topSpotCountFontSize = "24px",
  topSpotFontSize = "36px",
  topSpotHeight = 100,
  userBgColor = "#222",
  userFontColor = "white",
  userFontSize = "24px"
}) => {
  const MIN_COUNT = 3;
  const MAX_COUNT = 10;
  count = count < MIN_COUNT ? MIN_COUNT : count;
  count = count > MAX_COUNT ? MAX_COUNT : count;
  const [userState, setUserState] = React.useState<IUserState[]>([]);
  const [tabHeight, setTabHeight] = React.useState<number>(0);
  const { userId } = useQueryParams();

  const wrapperRef = React.useRef<HTMLDivElement>(null);

  function getRanking(username: string) {
    const sortedUsers = [...userState].sort((a, b) => b.messageCount - a.messageCount);
    const index = sortedUsers.findIndex(user => user.username === username);
    if (index !== -1) {
      return { index, ranking: index + 1 };
    } else {
      return { index, ranking: index };
    }
  }

  React.useEffect(() => {
    let isMounted = true;
    const eventSource = new EventSource(`http://localhost:8002/api/v1/chat-rank/events/${userId}`);

    eventSource.addEventListener("message", event => {
      const parsedData = JSON.parse(event.data);
      if (isMounted) {
        setUserState(parsedData);
      }
    });

    return () => {
      isMounted = false;
      eventSource.close();
    };
  }, []);

  React.useLayoutEffect(() => {
    if (
      wrapperRef?.current?.parentNode instanceof HTMLElement &&
      wrapperRef.current.parentNode.style.height
    ) {
      const parentHeight = parseInt(wrapperRef.current.parentNode.style.height);
      const runnerUps = (parentHeight - topSpotHeight) / (count - 1);
      setTabHeight(runnerUps);
    }
  }, [count, topSpotHeight]);

  const setTabTop = (index: number) => {
    if (index === 0) return "0";
    if (index === 1) return topSpotHeight + "px";
    return topSpotHeight + tabHeight * (index - 1) + "px";
  };

  const userEntries = userState.map((userData: IUserState) => {
    const { index, ranking } = getRanking(userData.username);
    const theTabHeight = index === 0 ? topSpotHeight : tabHeight;

    return (
      <Styled.ChatRankGrid
        backgroundColor={backgroundColor}
        borderBottomColor={borderBottomColor}
        key={userData.username}
        height={`${theTabHeight}px`}
        top={setTabTop(index)}
      >
        <Styled.RankDiv
          rankBgColor={rankBgColor}
          rankFontColor={rankFontColor}
          rankFontSize={index ? rankFontSize : topSpotCountFontSize}
        >
          {userData.image && showTopSpotImage && index === 0 ? (
            <img src={userData.image} alt="profile" />
          ) : (
            ranking
          )}
        </Styled.RankDiv>

        <Styled.UserDiv
          userBgColor={userBgColor}
          userFontColor={userFontColor}
          userFontSize={index ? userFontSize : topSpotFontSize}
        >
          <div>{userData.username}</div>
        </Styled.UserDiv>

        <Styled.CountDiv
          countBgColor={countBgColor}
          countFontColor={countFontColor}
          countFontSize={countFontSize}
        >
          {userData.messageCount}
        </Styled.CountDiv>
      </Styled.ChatRankGrid>
    );
  });

  return (
    <>
      <Styled.ChatRankWrapper ref={wrapperRef}>{userEntries}</Styled.ChatRankWrapper>
    </>
  );
};

export default ChatRank;
