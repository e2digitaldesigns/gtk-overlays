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

const Host: React.FC = () => {
  const { showSection } = useParams();

  const { hosts: data } = useDataContext();
  const { voting } = useVotingHook();
  const showHost = showSection(SectionsCHL.Host);

  React.useEffect(() => {}, []);

  if (!showHost) return null;

  return (
    <>
      {data.map((host: any) => (
        <Styled.HostBoxWrapper key={host.seatNum} position={host.seatNum}>
          <Styled.HostBoxStroke />
          <Styled.HostBox>
            <Styled.HostBoxInner position={host.seatNum}>
              <Styled.NameTag>
                <Scroller timer={CONFIG.scrollTimers.hostLabels}>
                  {host.ticker?.map((ticker: string, index: number) => (
                    <div key={index}>{ticker}</div>
                  ))}
                </Scroller>
              </Styled.NameTag>
            </Styled.HostBoxInner>

            <HostVote seatNum={host.seatNum} />

            <Styled.FireWrapper>
              <FireHost fireCount={5} seatNum={host.seatNum} />
            </Styled.FireWrapper>

            <Styled.VoteCount>{voting[host.seatNum]}</Styled.VoteCount>
          </Styled.HostBox>
        </Styled.HostBoxWrapper>
      ))}
    </>
  );
};

export default Host;
