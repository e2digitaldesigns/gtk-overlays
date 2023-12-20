import React from "react";
import * as Styled from "./HostVoteEmojis.style";
import { useVotingStore } from "../../dataStores";

interface IHostVoteEmojis {
  fontSize?: string;
  seatNum: number;
  speed?: number;
}

const HostVoteEmojis: React.FC<IHostVoteEmojis> = ({
  fontSize = "18px",
  seatNum,
  speed = 4
}) => {
  const votes = useVotingStore(state => state.votes);

  let hostVote = votes.filter(
    vote =>
      vote.host === String(seatNum) &&
      new Date(vote.createdAt) > new Date(Date.now() - 10000)
  );

  return (
    <>
      {hostVote.map(vote => (
        <Styled.VoteFloat
          key={vote._id}
          fontSize={fontSize}
          numberStr={numberFromId(vote._id)}
          speed={speed}
          type={vote.action}
        >
          {emojiParser(vote._id, vote.action)}
        </Styled.VoteFloat>
      ))}
    </>
  );
};

export default HostVoteEmojis;

const numberFromId = (_id: string) => {
  const numbersArray = _id.match(/\d+/g);
  let numbers = numbersArray?.map(Number) || [1];
  let number = String(numbers[0])[0];
  return Number(number);
};

const emojiParser = (_id: string, action: string) => {
  const number = String(numberFromId(_id));

  type EmojiSet = {
    [key: string]: { [key: string]: string };
  };

  const emojiSet: EmojiSet = {
    "0": { add: "👍", remove: "👎", super: "❤️‍🔥" },
    "1": { add: "😂", remove: "😵", super: "❤️‍🔥" },
    "2": { add: "💕", remove: "🤢", super: "❤️‍🔥" },
    "3": { add: "🫠", remove: "😒", super: "❤️‍🔥" },
    "4": { add: "🔥", remove: "🤮", super: "❤️‍🔥" },
    "5": { add: "🥳", remove: "🤐", super: "♨️" },
    "6": { add: "🙌", remove: "🧊", super: "♨️" },
    "7": { add: "😘", remove: "🤬", super: "♨️" },
    "8": { add: "😍", remove: "👿", super: "♨️" },
    "9": { add: "🥰", remove: "👺", super: "♨️" }
  };

  const emoji = emojiSet[number][action];
  return emoji;
};
