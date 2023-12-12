import * as React from "react";
import * as Styled from "./Host.styles";
import { HostVoteEmojis, Scroller } from "../../../../../globalComponents";
import { useParams } from "../../../../../hooks";
import { useDataContext } from "../../../../../context";
import { SectionsFGT } from "../../../../../types";
import CONFIG from "../../config.json";
import {
  IVotes,
  IVotingState
} from "../../../../../hooks/useVotingHook/useVotngHookTypes";

const scrollDotArray = new Array(6).fill(0);

interface IHostProps {
  voting: IVotingState;
  votes: IVotes[];
}

const HostFGT: React.FC<IHostProps> = ({ voting, votes }) => {
  const { showSection } = useParams();
  const { hosts: data } = useDataContext();

  const hostPermissionMap: { [key: string]: boolean } = {
    1: showSection(SectionsFGT.Host1),
    2: showSection(SectionsFGT.Host2),
    3: showSection(SectionsFGT.Host3),
    4: showSection(SectionsFGT.Host4)
  };

  // const leader = leadingSeat?.includes(String(seat));

  return (
    <>
      {data.map((host: any) => {
        if (!hostPermissionMap[host.seatNum]) return null;
        // console.log(37, host);
        return (
          <Styled.HostWrapper
            key={host.seatNum}
            leader={false}
            seat={host.seatNum}
          >
            <>
              {scrollDotArray.map((_, index: number) => (
                <Styled.ScrollDot
                  delay={index + host.seatNum * 3}
                  key={index}
                />
              ))}
            </>

            <Styled.NameTag>
              <Scroller
                timer={CONFIG.scrollTimers.hostLabels}
                transition="fade"
              >
                {host?.ticker?.map((ticker: string, tIndex: number) => (
                  <div key={tIndex}>{ticker}</div>
                ))}
              </Scroller>
            </Styled.NameTag>

            <HostVoteEmojis seatNum={host.seatNum} votes={votes} />
            <Styled.VoteCount>{voting[host.seatNum]}</Styled.VoteCount>
          </Styled.HostWrapper>
        );
      })}
    </>
  );
};

export default HostFGT;
