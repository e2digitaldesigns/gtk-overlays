import React from "react";
import * as Styled from "./HostVoteEmojis.style";
import { IVotes } from "../../hooks/useVotingHook/useVotingHook";

interface IHostVoteEmojis {
  seatNum: number;
  votes: IVotes[];
}

const HostVoteEmojis: React.FC<IHostVoteEmojis> = ({ seatNum, votes }) => {
  const [hostVote, setHostVote] = React.useState<IVotes[]>([]);

  React.useEffect(() => {
    const lastElement = votes[votes.length - 1];

    if (lastElement?.host !== String(seatNum)) return;

    setHostVote(prev => [...prev, lastElement]);

    setTimeout(() => {
      setHostVote(prev => prev.filter(vote => vote._id !== lastElement._id));
    }, 10000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seatNum, votes]);

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
      "0": { add: "👍", remove: "👎", super: "😘" },
      "1": { add: "😂", remove: "😵", super: "😘" },
      "2": { add: "💕", remove: "🤢", super: "😘" },
      "3": { add: "🫠", remove: "😒", super: "😘" },
      "4": { add: "🔥", remove: "🤮", super: "😘" },
      "5": { add: "🥳", remove: "🤐", super: "😘" },
      "6": { add: "🙌", remove: "🧊", super: "😘" },
      "7": { add: "😘", remove: "🤬", super: "😘" },
      "8": { add: "😍", remove: "👿", super: "😘" },
      "9": { add: "🥰", remove: "👺", super: "😘" }
    };

    const emoji = emojiSet[number][action];
    return emoji;
  };

  return (
    <>
      {hostVote.map(vote => (
        <Styled.VoteFloat
          key={vote._id}
          numberStr={numberFromId(vote._id)}
          type={vote.action}
        >
          {emojiParser(vote._id, vote.action)}
        </Styled.VoteFloat>
      ))}
    </>
  );
};

export default HostVoteEmojis;
