import React from "react";
import * as Styled from "./TopChat.styles";
import _sortBy from "lodash/sortBy";
import _cloneDeep from "lodash/cloneDeep";
import socketServices from "../../services/socketServices";
import { RequestType } from "../../types";
import axios from "axios";

interface ITopChatProps {
  isDemo?: boolean;
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
  showTopSpotImage?: boolean;
  topSpotHeight?: number;
}

interface IUserState {
  username: string;
  messageCount: number;
  image: string;
}

const defaultState: IUserState[] = [
  { username: "iCON33", messageCount: 4, image: "" },
  { username: "jscGoat", messageCount: 3, image: "" },
  { username: "cmdrtibtib", messageCount: 2, image: "" },
  { username: "CodexHere", messageCount: 1, image: "" }
];

const TopChat: React.FC<ITopChatProps> = ({
  isDemo = false,
  count = 3,

  borderBottomColor = "#a0941c",

  rankBgColor = "#562154",
  rankFontColor = "white",
  rankFontSize = "48px",

  userBgColor = "#24082e",
  userFontColor = "white",
  userFontSize = "32px",

  countBgColor = "#24082e",
  countFontColor = "white",
  countFontSize = "24px",

  topSpotFontSize = "54px",
  showTopSpotImage = true,
  topSpotHeight = 145
}) => {
  const MAX_COUNT = 10;
  count = count > MAX_COUNT ? MAX_COUNT : count;
  const [userState, setUserState] = React.useState<IUserState[]>(
    isDemo ? defaultState : []
  );
  const [tabHeight, setTabHeight] = React.useState<number>(0);

  const wrapperRef = React.useRef<any>(null);

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
    if (wrapperRef?.current?.parentNode?.style?.height) {
      const parentHeight = parseInt(wrapperRef.current.parentNode.style.height);
      const runnerUps = (parentHeight - topSpotHeight) / (count - 1);
      setTabHeight(runnerUps);
    }
  }, [count, topSpotHeight]);

  React.useEffect(() => {
    let stillHere = true;

    socketServices.subscribeOverlaysChatRanks((err: unknown, data: any) => {
      if (data?.uid !== queryParams.get(RequestType.UserId)) return;
      if (data?.tid !== queryParams.get(RequestType.Template)) return;

      switch (data.action) {
        case "chatRankUpdate":
          stillHere && setUserState(prevState => data.messages);
          break;
      }
    });

    return () => {
      stillHere = false;
      socketServices.unSubscribeOverlaysChatRanks();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams]);

  const sortedData = _sortBy(userState, ["messageCount"]).reverse();

  const getRank = (username: string) =>
    sortedData.findIndex((user: IUserState) => user.username === username);

  const testing = (username: string) => {
    const newState = _cloneDeep(userState);

    const index = newState.findIndex(
      (user: IUserState) => user.username === username
    );

    newState[index].messageCount = newState[index].messageCount + 1;
    setUserState(newState);
  };

  const setTabTop = (rank: number) => {
    if (rank === 0) return 0;
    if (rank === 1) return topSpotHeight;
    return topSpotHeight + tabHeight * (rank - 1);
  };

  const userEntries = userState.map((userData: IUserState) => {
    const rank = getRank(userData.username);
    const theTabHeight = rank === 0 ? topSpotHeight : tabHeight;

    return (
      <Styled.TopChatterGrid
        borderBottomColor={borderBottomColor}
        key={userData.username}
        height={`${theTabHeight}px`}
        top={`${setTabTop(rank)}px`}
      >
        <Styled.RankDiv
          rankBgColor={rankBgColor}
          rankFontColor={rankFontColor}
          rankFontSize={rankFontSize}
        >
          {showTopSpotImage && rank === 0 ? (
            <img src={userData.image} alt="profile" />
          ) : (
            rank + 1
          )}
        </Styled.RankDiv>

        <Styled.UserDiv
          userBgColor={userBgColor}
          userFontColor={userFontColor}
          userFontSize={rank ? userFontSize : topSpotFontSize}
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

  const demoOutput = !isDemo ? null : (
    <Styled.DemoButtonWrapper>
      {defaultState.map((user: IUserState) => (
        <button key={user.username} onClick={() => testing(user.username)}>
          {user.username}
        </button>
      ))}
    </Styled.DemoButtonWrapper>
  );

  return (
    <>
      <Styled.TopChatWrapper ref={wrapperRef}>
        {userEntries}
      </Styled.TopChatWrapper>

      {demoOutput}
    </>
  );
};

export default TopChat;
