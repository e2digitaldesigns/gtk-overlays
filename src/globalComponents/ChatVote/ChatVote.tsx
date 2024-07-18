import React from "react";
import socketServices from "../../services/socketServices";
import { ChatVoteData } from "../../types";
import { useChatVotingStore } from "../../dataStores";
import * as Styled from "./ChatVote.styles";
import _cloneDeep from "lodash/cloneDeep";
import { useParamCheck } from "../Utils/paramCheck";

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
  const [itemHeight, setItemHeight] = React.useState(0);
  const chatDataStore = useChatVotingStore(state => state);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const { isValid } = useParamCheck<ChatVoteData>();

  React.useEffect(() => {
    const wrapperHeight = wrapperRef.current?.clientHeight || 0;
    setItemHeight(wrapperHeight / chatters);
  }, [chatters]);

  const rankParser = (username: string, type: "top" | "zIndex"): number => {
    const newArr = _cloneDeep(chatDataStore.votes).sort((a, b) => b.votes - a.votes);

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
          chatDataStore.addVote(data.data);
          break;
        case "clear":
          chatDataStore.clearChatVotes();
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
      {chatDataStore.votes.map(vote => (
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
            {vote.username}
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
