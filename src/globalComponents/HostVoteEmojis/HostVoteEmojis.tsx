import React from "react";
import * as Styled from "./HostVoteEmojis.style";
import { useVotingStore } from "../../dataStores";
import _range from "lodash/range";

interface IHostVoteEmojis {
  fontSize?: string;
  seatNum: number;
  speed?: number;
  right?: number;
  bottom?: number;
}

const HostVoteEmojis: React.FC<IHostVoteEmojis> = ({
  fontSize = "22px",
  seatNum,
  speed = 4,
  right = 20,
  bottom = 20
}) => {
  const votes = useVotingStore(state => state.votes);

  const hostVote = votes.filter(
    vote =>
      vote.host === String(seatNum) &&
      new Date(vote.createdAt) > new Date(Date.now() - 10000)
  );

  const parsedHostVotes = hostVote.flatMap(vote => {
    if (vote.action === "super") {
      const votes = _range(8).map(index => ({
        ...vote,
        _id: `${index}_${vote._id}`
      }));

      return votes;
    }

    return vote;
  });

  return (
    <>
      {parsedHostVotes.map((vote, index: number) => (
        <Styled.VoteFloat
          key={vote._id}
          bottom={bottom}
          delay={index ? numberFromId(vote._id) * 0.3 : 0}
          fontSize={fontSize}
          numberStr={numberFromId(vote._id)}
          right={right}
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
  const numbers = numbersArray?.map(Number) || [1];
  const number = String(numbers[0])[0];
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
