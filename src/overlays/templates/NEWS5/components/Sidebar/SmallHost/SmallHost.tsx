import React from "react";
import * as Styled from "./SmallHost.styles";
import { useDataContext } from "../../../../../../context";

import { Scroller, HostVoteEmojis } from "../../../../../../globalComponents";

import CONFIG from "../../../config.json";
import { useVoting } from "../../../../../../hooks";
import useVideoPlayerDataStore from "../../../../../../dataStores/useVideoPlayerDataStore/useVideoPlayerDataStore";

export const SmallHostCNN: React.FC = () => {
  const { votingState } = useVoting();
  const { hosts: data } = useDataContext();

  const { isVideoViewable, videoSize } = useVideoPlayerDataStore(
    state => state
  );

  const showHost = isVideoViewable && videoSize === "normal";

  console.log({ isVideoViewable, showHost });

  return (
    <Styled.SmallHostWrapper showHost={showHost}>
      <Styled.VoteDisplay>{votingState[1]}</Styled.VoteDisplay>
      <Styled.EmojiPlacement>
        <HostVoteEmojis seatNum={1} fontSize="24px" />
      </Styled.EmojiPlacement>

      <Styled.HostNameWrapper>
        <Scroller timer={CONFIG.scrollTimers.hostLabels} transition="fade">
          {data?.[0]?.ticker?.map((ticker: string, index: number) => (
            <Styled.HostNameWrapperName key={index}>
              {ticker}
            </Styled.HostNameWrapperName>
          ))}
        </Scroller>
      </Styled.HostNameWrapper>
    </Styled.SmallHostWrapper>
  );
};
