import React from "react";
import * as Styled from "./HostVote.style";
import useVotingHook, {
  IVotes
} from "../../../../../hooks/useVotingHook/useVotingHook";

interface IHostVoteProps {
  seatNum: number;
}

export const HostVote: React.FC<IHostVoteProps> = ({ seatNum }) => {
  const { votes } = useVotingHook();

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

  const emojiParser = (action: "add" | "remove") => {
    const emoji = action === "add" ? "👍" : "👎";
    return emoji;
  };

  return (
    <>
      {hostVote.map(vote => (
        <Styled.VoteFloat key={vote._id}>
          {emojiParser(vote.action)}
        </Styled.VoteFloat>
      ))}
    </>
  );
};
