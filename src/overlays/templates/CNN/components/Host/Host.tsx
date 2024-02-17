import React from "react";
import * as Styled from "./Host.styles";
import { useParams, useVoting } from "../../../../../hooks";

import { HostVoteEmojis, Scroller } from "../../../../../globalComponents";
import { useDataContext } from "../../../../../context";

import CONFIG from "../../config.json";
import { SectionsCNN } from "../../../../../types";

export const HostCNN: React.FC = () => {
  const { votingState } = useVoting();
  const { hosts: data } = useDataContext();

  const { showSection } = useParams();
  if (!showSection(SectionsCNN.Host)) return null;

  return (
    <>
      <Styled.HostWrapperGlow />
      <Styled.HostWrapper>
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
      </Styled.HostWrapper>
    </>
  );
};
