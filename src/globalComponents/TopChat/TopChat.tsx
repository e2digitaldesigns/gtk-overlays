import React from "react";
import * as Styled from "./TopChat.styles";
import _sortBy from "lodash/sortBy";
import socketServices from "../../services/socketServices";
import { ChatRanker, RequestType } from "../../types";
import axios from "axios";

interface ITopChatProps {
  count?: number;
  borderBottomColor?: string;
  rankBgColor?: string;
  rankFontColor?: string;
  rankFontSize?: string;
  userBgColor?: string;
  userFontColor?: string;
  userFontSize?: string;
  countBgColor?: string;
  countFontColor?: string;
  countFontSize?: string;
  topSpotFontSize?: string;
  topSpotCountFontSize?: string;
  showTopSpotImage?: boolean;
  topSpotHeight?: number;
}

interface IUserState {
  username: string;
  messageCount: number;
  image: string;
}

const TopChat: React.FC<ITopChatProps> = ({
  count = 3,
  borderBottomColor = "#a0941c",
  rankBgColor = "#562154",
  rankFontColor = "white",
  rankFontSize = "24px",
  userBgColor = "#24082e",
  userFontColor = "white",
  userFontSize = "24px",
  countBgColor = "#24082e",
  countFontColor = "white",
  countFontSize = "24px",
  topSpotFontSize = "36px",
  topSpotCountFontSize = "24px",
  showTopSpotImage = true,
  topSpotHeight = 100
}) => {
  const MIN_COUNT = 3;
  const MAX_COUNT = 10;
  count = count < MIN_COUNT ? MIN_COUNT : count;
  count = count > MAX_COUNT ? MAX_COUNT : count;
  const [userState, setUserState] = React.useState<IUserState[]>([]);
  const [tabHeight, setTabHeight] = React.useState<number>(0);

  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const queryParams = React.useMemo(() => {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams;
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const api = `${
        process.env.REACT_APP_REST_SERVICE
      }chatlog/${queryParams.get(RequestType.UserId)}`;
      const { data } = await axios.get(api);
      setUserState(data);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  React.useEffect(() => {
    let stillHere = true;

    socketServices.subscribeOverlaysChatRanks(
      (err: unknown, data: ChatRanker) => {
        if (err) return;

        if (data?.uid !== queryParams.get(RequestType.UserId)) return;
        if (data?.tid !== queryParams.get(RequestType.Template)) return;

        switch (data.action) {
          case "chatRankUpdate":
            stillHere && setUserState(data.messages);
            break;
        }
      }
    );

    return () => {
      stillHere = false;
      socketServices.unSubscribeOverlaysChatRanks();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams]);

  const sortedData = _sortBy(userState, ["messageCount"]).reverse();

  const setTabTop = (rank: number) => {
    if (rank === 0) return 0;
    if (rank === 1) return topSpotHeight;
    return topSpotHeight + tabHeight * (rank - 1);
  };

  const userEntries = sortedData.map((userData: IUserState, index: number) => {
    const theTabHeight = index === 0 ? topSpotHeight : tabHeight;

    return (
      <Styled.TopChatterGrid
        borderBottomColor={borderBottomColor}
        key={userData.username}
        height={`${theTabHeight}px`}
        top={`${setTabTop(index)}px`}
      >
        <Styled.RankDiv
          rankBgColor={rankBgColor}
          rankFontColor={rankFontColor}
          rankFontSize={index ? rankFontSize : topSpotCountFontSize}
        >
          {userData.image && showTopSpotImage && index === 0 ? (
            <img src={userData.image} alt="profile" />
          ) : (
            index + 1
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
      </Styled.TopChatterGrid>
    );
  });

  return (
    <>
      <Styled.TopChatWrapper ref={wrapperRef}>
        {userEntries}
      </Styled.TopChatWrapper>
    </>
  );
};

export default TopChat;
