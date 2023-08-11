import React from "react";
import * as Styled from "./HostVote.style";
import { IVotes } from "../../../../../hooks/useVotingHook/useVotingHook";

interface IHostVoteProps {
  seatNum: number;
  votes: IVotes[];
}

export const HostVote: React.FC<IHostVoteProps> = ({ seatNum, votes }) => {
  const [hostVote, setHostVote] = React.useState<IVotes[]>([]);

  React.useEffect(() => {
    const lastElement = votes[votes.length - 1];

    if (lastElement?.host !== String(seatNum)) return;

    setHostVote(prev => [...prev, lastElement]);

    setTimeout(() => {
      setHostVote(prev => prev.filter(vote => vote._id !== lastElement._id));
    }, 5000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seatNum, votes]);

  const numberFromId = (_id: string) => {
    const numbersArray = _id.match(/\d+/g);
    let numbers = numbersArray?.map(Number) || [1];
    let number = String(numbers[0])[0];
    return Number(number);
  };

  const emojiParser = (_id: string, action: "add" | "remove") => {
    const number = String(numberFromId(_id));

    type EmojiSet = {
      [key: string]: {
        add: string;
        remove: string;
      };
    };

    const emojiSet: EmojiSet = {
      "0": { add: "👍", remove: "👎" },
      "1": { add: "😂", remove: "😵" },
      "2": { add: "💕", remove: "🤢" },
      "3": { add: "🫠", remove: "😒" },
      "4": { add: "🔥", remove: "🤮" },
      "5": { add: "🥳", remove: "🤐" },
      "6": { add: "🙌", remove: "🧊" },
      "7": { add: "😘", remove: "🤬" },
      "8": { add: "😍", remove: "👿" },
      "9": { add: "🥰", remove: "👺" }
    };

    const emoji = emojiSet[number][action];
    return emoji;
  };

  return (
    <>
      {hostVote.map(vote => (
        <Styled.VoteFloat key={vote._id} numberStr={numberFromId(vote._id)}>
          {emojiParser(vote._id, vote.action)}
        </Styled.VoteFloat>
      ))}
    </>
  );
};
