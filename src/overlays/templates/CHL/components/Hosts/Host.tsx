import * as React from "react";
import * as Styled from "./Host.style";
import { useParams } from "../../../../../hooks";
import { HostVoteEmojis, Scroller } from "../../../../../globalComponents";

import { useDataContext } from "./../../../../../context";
import {
  IVoteStreaks,
  IVotes,
  IVotingState,
  SectionsCHL
} from "../../../../../types";

import CONFIG from "../../config.json";
import { FireHost } from "./FireHost";
import FireCountDisplay from "./FireCountDisplay";

interface IHostProps {
  voting: IVotingState;
  votes: IVotes[];
  votingStreak: IVoteStreaks;
}

const Host: React.FC<IHostProps> = ({ voting, votes, votingStreak }) => {
  const { showSection } = useParams();

  const { hosts: data } = useDataContext();

  const showHosts: { [key: string]: boolean } = {
    1: showSection(SectionsCHL.Host1),
    2: showSection(SectionsCHL.Host2),
    3: showSection(SectionsCHL.Host3)
  };

  return (
    <>
      {data.map(host => {
        if (!showHosts[host.seatNum]) return null;
        return (
          <Styled.HostBoxWrapper key={host.seatNum} position={host.seatNum}>
            <Styled.HostBoxStroke />
            <Styled.HostBox>
              <Styled.HostBoxInner position={host.seatNum} />
            </Styled.HostBox>
            <Styled.HostBoxDefault>
              <Styled.NameTag>
                <Scroller timer={CONFIG.scrollTimers.hostLabels}>
                  {host.ticker?.map((ticker: string, index: number) => (
                    <div key={index}>{ticker}</div>
                  ))}
                </Scroller>
              </Styled.NameTag>

              <FireCountDisplay
                seatNum={host.seatNum}
                votingStreak={votingStreak}
              />

              <HostVoteEmojis seatNum={host.seatNum} votes={votes} />

              <Styled.FireWrapper>
                <FireHost
                  fireCount={CONFIG.fireHostCount}
                  seatNum={host.seatNum}
                  votingStreak={votingStreak}
                />
              </Styled.FireWrapper>

              <Styled.VoteCount>{voting[host.seatNum]}</Styled.VoteCount>
            </Styled.HostBoxDefault>
          </Styled.HostBoxWrapper>
        );
      })}
    </>
  );
};

export default Host;
