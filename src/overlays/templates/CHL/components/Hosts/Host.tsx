import * as React from "react";
import * as Styled from "./Host.style";
import { useParams } from "../../../../../hooks";
import useVotingHook from "../../../../../hooks/useVotingHook/useVotingHook";
import { Scroller } from "../../../../../globalComponents";

import { useDataContext } from "./../../../../../context";
import { SectionsCHL } from "../../../../../types";

import CONFIG from "../../config.json";
import { HostVote } from "./HostVote";
import { FireHost } from "./FireHost";
import FireCountDisplay from "./FireCountDisplay";

const Host: React.FC = () => {
  const { showSection } = useParams();

  const { hosts: data } = useDataContext();
  const { voting, votes, votingStreak } = useVotingHook();
  const showHost = showSection(SectionsCHL.Host);

  if (!showHost) return null;

  return (
    <>
      {data.map((host: any) => (
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

            <HostVote seatNum={host.seatNum} votes={votes} />

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
      ))}
    </>
  );
};

export default Host;
