import React from "react";
import * as Styled from "./HostVote.style";

interface IHostVoteInnerProps {
  vote: any;
}

export const HostVoteInner: React.FC<IHostVoteInnerProps> = React.memo(
  ({ vote }) => {
    const positiveEmojis = ["👍", "🥳", "🤠", "😍", "🎁", "🍕"];
    const negativeEmojis = ["👎", "😡", "🤬", "🤢", "🤮", "👿"];

    const emojiParser = (action: "add" | "remove") => {
      const emojis = action === "add" ? positiveEmojis : negativeEmojis;
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      return emoji;
    };

    return (
      <>
        <Styled.VoteFloat key={vote._id}>
          {emojiParser(vote.action)}
        </Styled.VoteFloat>
      </>
    );
  }
);
