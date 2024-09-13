import React from "react";
import * as Styled from "./Host.styles";
import { useParams, useVoting } from "../../../../../hooks";

import { HostVoteEmojis, Scroller } from "../../../../../globalComponents";
import { useDataContext } from "../../../../../context";

import CONFIG from "../../config.json";
import { SectionsCNN } from "../../../../../types";
import useVideoPlayerDataStore from "../../../../../dataStores/useVideoPlayerDataStore/useVideoPlayerDataStore";
import { VideoSize } from "../../../../../globalComponents/VideoPlayer/VideoPlayer.types";

export const HostCNN: React.FC = () => {
  const { showSection } = useParams();
  const { votingState } = useVoting();
  const { hosts: data } = useDataContext();
  const { isVideoViewable, videoSize } = useVideoPlayerDataStore(state => state);
  const hideHostName = videoSize === VideoSize.SMALL && isVideoViewable;

  if (!showSection(SectionsCNN.Host)) return null;

  return (
    <>
      <Styled.HostWrapper isVisible={!hideHostName}>
        <Styled.VoteDisplay>{votingState[1]}</Styled.VoteDisplay>
        <Styled.EmojiPlacement>
          <HostVoteEmojis seatNum={1} fontSize="24px" />
        </Styled.EmojiPlacement>

        <Styled.HostNameWrapper>
          <Scroller timer={CONFIG.scrollTimers.hostLabels} transition="fade">
            {data?.[0]?.ticker?.map((ticker: string, index: number) => (
              <Styled.HostNameWrapperName key={index}>{ticker}</Styled.HostNameWrapperName>
            ))}
          </Scroller>
        </Styled.HostNameWrapper>
      </Styled.HostWrapper>
    </>
  );
};
