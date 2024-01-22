import * as React from "react";
import * as Styled from "./Host.styles";
import { HostVoteEmojis, Scroller } from "../../../../../globalComponents";
import { useParams, useVoting } from "../../../../../hooks";
import { useDataContext } from "../../../../../context";
import { SectionsFGT } from "../../../../../types";
import CONFIG from "../../../FGT/config.json";

const scrollDotArray = new Array(6).fill(0);

const HostFGT: React.FC = () => {
  const { showSection } = useParams();
  const { hosts: data } = useDataContext();

  const { votingState } = useVoting();

  const hostPermissionMap: { [key: string]: boolean } = {
    1: showSection(SectionsFGT.Host1),
    2: showSection(SectionsFGT.Host2),
    3: showSection(SectionsFGT.Host3),
    4: showSection(SectionsFGT.Host4)
  };

  return (
    <>
      {data.map(host => {
        if (!hostPermissionMap[host.seatNum]) return null;

        return (
          <Styled.HostWrapper
            key={host.seatNum}
            leader={false}
            seat={String(host.seatNum)}
          >
            <>
              {scrollDotArray.map((_, index: number) => (
                <Styled.ScrollDot
                  delay={index + host.seatNum * 3}
                  key={index}
                />
              ))}
            </>

            <HostVoteEmojis seatNum={host.seatNum} right={390} />

            <Styled.NameTag>
              <Styled.VoteCountWrapper>
                <Styled.VoteCount>{votingState[host.seatNum]}</Styled.VoteCount>
              </Styled.VoteCountWrapper>
              <Scroller
                timer={CONFIG.scrollTimers.hostLabels}
                transition="fade"
              >
                {host?.ticker?.map((ticker: string, tIndex: number) => (
                  <Styled.NameTagText key={tIndex}>{ticker}</Styled.NameTagText>
                ))}
              </Scroller>
            </Styled.NameTag>
          </Styled.HostWrapper>
        );
      })}
    </>
  );
};

export default HostFGT;
