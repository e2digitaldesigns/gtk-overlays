import * as React from "react";
import * as Styled from "./host.style";
import { useParams } from "../../../../../hooks";
import useVotingHook from "../../../../../hooks/useVotingHook/useVotingHook";
import { Scroller } from "../../../../../globalComponents";

import { useDataContext } from "../../../../../context";
import { SectionsXBX } from "../../../../../types";
import { HostVote } from "./HostVote";

import CONFIG from "../../config.json";

const HostXBX: React.FC = () => {
  const { showSection } = useParams();

  const { hosts: data } = useDataContext();
  const { voting, votes } = useVotingHook();

  const show2UpHosts: { [key: string]: boolean } = {
    1: showSection(SectionsXBX.Host_2_Up_Host_1),
    2: showSection(SectionsXBX.Host_2_Up_Host_2)
  };

  if (showSection(SectionsXBX.Host_1_Up))
    return (
      <Styled.Host1Up>
        <Styled.NameTag>
          <Scroller timer={CONFIG.scrollTimers.hostLabels} transition="fade">
            {data?.[0].ticker?.map((ticker: string, index: number) => (
              <div key={index}>{ticker}</div>
            ))}
          </Scroller>
        </Styled.NameTag>

        <HostVote seatNum={1} votes={votes} />

        <Styled.VoteCount>{voting[1]}</Styled.VoteCount>
      </Styled.Host1Up>
    );

  return (
    <>
      {data.map((host: any, index: number) => {
        if (!show2UpHosts[host.seatNum]) return null;

        return (
          <Styled.Host2Up key={host.seatNum} position={host.seatNum}>
            <Styled.NameTag>
              <Scroller
                timer={CONFIG.scrollTimers.hostLabels}
                transition="fade"
              >
                {host.ticker?.map((ticker: string, index: number) => (
                  <div key={index}>{ticker}</div>
                ))}
              </Scroller>
            </Styled.NameTag>

            <HostVote seatNum={host.seatNum} votes={votes} />

            <Styled.VoteCount>{voting[host.seatNum]}</Styled.VoteCount>
          </Styled.Host2Up>
        );
      })}
    </>
  );
};

export default HostXBX;
