import React from "react";
import socketServices from "../../services/socketServices";
import { ChatVoteData, RequestType } from "../../types";
import * as Styled from "./ChatVote.styles";
import _cloneDeep from "lodash/cloneDeep";
import { useParamCheck } from "../Utils/paramCheck";
import axios from "axios";

interface IChatterVoteState {
  username: string;
  votes: number;
  image: string;
}

interface ChatVoteProps {
  chatters?: number;
  fontSize?: string;
  nameColor?: string;
  nameBgColor?: string;
  voteColor?: string;
  voteBgColor?: string;
  borderBottom?: string;
}

const ChatVote: React.FC<ChatVoteProps> = ({
  chatters = 3,
  fontSize = "1.25rem",
  nameColor = "white",
  voteColor = "white",
  voteBgColor = "black",
  nameBgColor = "black",
  borderBottom = "1px solid #fff"
}) => {
  const [chatterVoteState, setChatterVoteState] = React.useState<IChatterVoteState[]>([]);
  const [itemHeight, setItemHeight] = React.useState(0);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const { isValid } = useParamCheck<ChatVoteData>();

  const queryParams = React.useMemo(() => {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams;
  }, []);

  React.useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const api = `${process.env.REACT_APP_REST_SERVICE}chatLikes/${queryParams.get(RequestType.UserId)}`;
      const { data } = await axios.get(api);
      if (isMounted) {
        setChatterVoteState(data);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [queryParams]);

  React.useLayoutEffect(() => {
    const wrapperHeight = wrapperRef.current?.clientHeight || 0;
    setItemHeight(wrapperHeight / chatters);
  }, [chatters]);

  const rankParser = (username: string, type: "top" | "zIndex"): number => {
    const newArr = _cloneDeep(chatterVoteState).sort((a, b) => b.votes - a.votes);

    if (type === "top") {
      const index = newArr.findIndex(vote => vote.username === username);
      return index * itemHeight;
    } else {
      const index = newArr.reverse().findIndex(vote => vote.username === username);
      return index;
    }
  };

  React.useEffect(() => {
    socketServices.subscribeChatVote((err: unknown, data: ChatVoteData) => {
      if (!isValid(data)) return;

      switch (data.action) {
        case "vote":
          setChatterVoteState(prevState => {
            const newVotes = _cloneDeep(prevState);
            const existingVoteIndex = newVotes.findIndex(
              vote => vote.username === data.data.username
            );

            if (existingVoteIndex !== -1) {
              newVotes[existingVoteIndex].votes += data.data.votes;
            } else {
              newVotes.push(data.data);
            }

            return newVotes;
          });
          break;
        case "clear":
          setChatterVoteState([]);
          break;
        default:
          break;
      }
    });

    return () => {
      socketServices.unSubscribeChatDisplay();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.VoteContainer ref={wrapperRef}>
      {chatterVoteState.map(vote => (
        <Styled.VoteItem
          borderBottom={borderBottom}
          fontSize={fontSize}
          height={itemHeight}
          key={vote.username}
          nameColor={nameColor}
          voteColor={voteColor}
          top={rankParser(vote.username, "top")}
          zIndex={rankParser(vote.username, "zIndex")}
        >
          <Styled.VoteItemName bgColor={nameBgColor} color={nameColor}>
            <div>{vote.username}</div>
          </Styled.VoteItemName>
          <Styled.VoteItemVotes bgColor={voteBgColor} color={voteColor}>
            {vote.votes}
          </Styled.VoteItemVotes>
        </Styled.VoteItem>
      ))}
    </Styled.VoteContainer>
  );
};

export default ChatVote;
