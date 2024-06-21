import React from "react";
import * as Styled from "./HostVoteEmojis.style";
import { useVotingStore } from "../../dataStores";
import { IVoteEmojis } from "../../types";

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

  const emojiArray: IVoteEmojis[] = React.useMemo(() => {
    let emojis: IVoteEmojis[] = [];
    const tenSecondsAgo = Date.now() - 10000;
    const validVotes = votes.filter(
      vote =>
        vote.host === String(seatNum) &&
        new Date(vote.createdAt).getTime() > tenSecondsAgo
    );

    for (let i = 0; i < validVotes.length; i++) {
      emojis = emojis.concat(validVotes[i].emojis);
    }

    return emojis;
  }, [votes, seatNum]);

  return (
    <>
      {emojiArray.map((emoji, index: number) => (
        <Styled.VoteFloat
          key={emoji._id}
          bottom={bottom}
          delay={index * 0.1}
          fontSize={fontSize}
          start={emoji.start}
          right={right}
          speed={speed}
          type={emoji.action}
        >
          {emoji.emoji}
        </Styled.VoteFloat>
      ))}
    </>
  );
};

export default HostVoteEmojis;
