import * as React from "react";
import * as Styled from "./Host.styles";
import { HostVoteEmojis, Scroller } from "../../../../../globalComponents";
import { useParams } from "../../../../../hooks";
import { useDataContext } from "../../../../../context";
import useVotingHook from "../../../../../hooks/useVotingHook";
import { SectionsFGT } from "../../../../../types";
import CONFIG from "../../config.json";

interface HostFGTProps {
  seat: number;
}

// const scrollDotArray = new Array(8)
//   .fill(0)
//   .map((_, index) => index * (Math.random() * 0.5 + 0.5) + "s");

const scrollDotArray = new Array(8).fill(0).map((_, index) => index * 50.5);

console.log("HostFGT.tsx: scrollDotArray: ", scrollDotArray);

const HostFGT: React.FC<HostFGTProps> = ({ seat }) => {
  const { showSection } = useParams();
  const { hosts: data } = useDataContext();
  const { leadingSeat, voting, votes } = useVotingHook();

  const thisHost = data?.find((host: any) => host.seatNum === seat);

  const hostPermissionMap: { [key: string]: boolean } = {
    1: showSection(SectionsFGT.Host1),
    2: showSection(SectionsFGT.Host2),
    3: showSection(SectionsFGT.Host3),
    4: showSection(SectionsFGT.Host4)
  };

  const leader = leadingSeat?.includes(String(seat));

  return hostPermissionMap[seat] ? (
    <>
      <Styled.HostWrapper seat={String(seat)} leader={leader}>
        {!leader && (
          <>
            {scrollDotArray.map((delay: number, index: number) => (
              <Styled.ScrollDot delay={delay} key={index} />
            ))}
          </>
        )}

        <Styled.NameTag>
          <Scroller timer={CONFIG.scrollTimers.hostLabels} transition="fade">
            {thisHost?.ticker?.map((ticker: string, index: number) => (
              <div key={index}>{ticker}</div>
            ))}
          </Scroller>
        </Styled.NameTag>

        <HostVoteEmojis seatNum={seat} votes={votes} />
        <Styled.VoteCount>{voting[seat]}</Styled.VoteCount>
      </Styled.HostWrapper>
    </>
  ) : null;
};

export default HostFGT;
