import * as React from "react";
import * as Styled from "./Host.style";
import { useParams, useVoting } from "../../../../../hooks";
import { HostVoteEmojis, Scroller } from "../../../../../globalComponents";

import { useDataContext } from "../../../../../context";
import { SectionsACT } from "../../../../../types";

import CONFIG from "../../config.json";
import { FireHost } from "./FireHost";
import FireCountDisplay from "./FireCountDisplay";

const Host: React.FC = () => {
  const { showSection } = useParams();
  const { hosts: data } = useDataContext();
  const { votingState, votingStreak } = useVoting();

  const showHosts: { [key: string]: boolean } = {
    1: showSection(SectionsACT.Host1),
    2: showSection(SectionsACT.Host2),
    3: showSection(SectionsACT.Host3),
    4: showSection(SectionsACT.Host4)
  };

  return (
    <>
      {data.map(host => {
        if (!showHosts[host.seatNum]) return null;
        return (
          <Styled.HostBoxWrapper key={host.seatNum} position={host.seatNum}>
            <Styled.NameTag>
              <Scroller timer={CONFIG.scrollTimers.hostLabels}>
                {host.ticker?.map((ticker: string, index: number) => (
                  <div key={index}>{ticker}</div>
                ))}
              </Scroller>
            </Styled.NameTag>

            <FireCountDisplay seatNum={host.seatNum} votingStreak={votingStreak} />

            <HostVoteEmojis bottom={15} seatNum={host.seatNum} />

            <Styled.FireWrapper>
              <FireHost
                fireCount={CONFIG.fireHostCount}
                seatNum={host.seatNum}
                votingStreak={votingStreak}
              />
            </Styled.FireWrapper>

            <Styled.VoteCount>{votingState[host.seatNum]}</Styled.VoteCount>
          </Styled.HostBoxWrapper>
        );
      })}
    </>
  );
};

export default Host;
