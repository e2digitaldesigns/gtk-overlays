import React, { useEffect, useLayoutEffect } from "react";
import * as Styled from "./ChatVote.styles";
import _cloneDeep from "lodash/cloneDeep";
import { useQueryParams } from "../../hooks";

export interface IChatterVoteState {
  image: string;
  username: string;
  votes: number;
}

interface ChatVoteProps {
  chatters?: number;
  fontSize?: string;
  nameColor?: string;
  nameBgColor?: string;
  voteColor?: string;
  voteBgColor?: string;
  borderBottom?: string;
  showIcon?: boolean;
  callBackFn?: (data: IChatterVoteState[]) => void;
}

const ChatVote: React.FC<ChatVoteProps> = ({
  borderBottom = "1px solid #fff",
  chatters = 3,
  fontSize = "1.25rem",
  nameBgColor = "black",
  nameColor = "white",
  showIcon = true,
  voteBgColor = "black",
  voteColor = "white",
  callBackFn
}) => {
  const [chatterVoteState, setChatterVoteState] = React.useState<IChatterVoteState[]>([]);
  const { userId } = useQueryParams();
  const [itemHeight, setItemHeight] = React.useState(0);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    const eventSource = new EventSource(
      `http://localhost:8002/api/v1/chat-voting/events/${userId}`
    );

    eventSource.addEventListener("message", event => {
      const parsedData = JSON.parse(event.data);
      if (isMounted) setChatterVoteState(parsedData);
    });

    return () => {
      isMounted = false;
      eventSource.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (callBackFn) {
      callBackFn(chatterVoteState);
    }
  }, [chatterVoteState, callBackFn]);

  useLayoutEffect(() => {
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

  return (
    <Styled.VoteContainer ref={wrapperRef}>
      {chatterVoteState.map(vote => (
        <Styled.VoteItem
          borderBottom={borderBottom}
          fontSize={fontSize}
          height={itemHeight}
          key={vote.username}
          nameColor={nameColor}
          showIcon={showIcon}
          top={rankParser(vote.username, "top")}
          voteColor={voteColor}
          zIndex={rankParser(vote.username, "zIndex")}
        >
          {showIcon && (
            <Styled.VoteItemImage>
              <img src={vote.image} alt={vote.username} />
            </Styled.VoteItemImage>
          )}
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
