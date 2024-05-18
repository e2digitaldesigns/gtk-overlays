import React from "react";
import * as Styled from "./Hosts.style";
import { useParams, useVoting } from "../../../../../hooks";
import { HostVoteEmojis, Scroller } from "../../../../../globalComponents";

import { useDataContext } from "../../../../../context";
import { SectionsESPN } from "../../../../../types";

import CONFIG from "../../config.json";

export const HostsESPN: React.FC = () => {
  const { showSection } = useParams();
  const { hosts: data } = useDataContext();
  const { votingState } = useVoting();

  const showHosts: { [key: string]: boolean } = {
    1: showSection(SectionsESPN.Host1),
    2: showSection(SectionsESPN.Host2),
    3: showSection(SectionsESPN.Host3)
  };

  return (
    <>
      {data.map(host => {
        if (!showHosts[host.seatNum]) return null;
        return (
          <Styled.HostBoxWrapper key={host.seatNum} position={host.seatNum}>
            <Styled.HostBox></Styled.HostBox>

            <Styled.NameTag>
              <Scroller timer={CONFIG.scrollTimers.hostLabels}>
                {host.ticker?.map((ticker: string, index: number) => (
                  <div key={index}>{ticker}</div>
                ))}
              </Scroller>
            </Styled.NameTag>

            <HostVoteEmojis seatNum={host.seatNum} />

            <Styled.VoteCount>{votingState[host.seatNum]}</Styled.VoteCount>
          </Styled.HostBoxWrapper>
        );
      })}
    </>
  );
};
