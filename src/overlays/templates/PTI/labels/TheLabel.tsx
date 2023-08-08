import React from "react";
import * as Styled from "./Label.style";
import { Scroller } from "../../../../globalComponents";

import CONFIG from "../config.json";
import useVotingHook from "../../../../hooks/useVotingHook/useVotingHook";
import { useDataContext } from "../../../../context";

interface ITheHostLabel {
  seatNumber: number;
  threeUp?: boolean;
}

export const TheHostLabel: React.FC<ITheHostLabel> = ({
  seatNumber,
  threeUp = false
}) => {
  const { hosts } = useDataContext();
  const { voting } = useVotingHook();

  const host = hosts.find((host: any) => host.seatNum === seatNumber);

  return host ? (
    <>
      {threeUp && (
        <Styled.HostWrapper3 seat={seatNumber}>
          <Styled.Vote>{voting[host.seatNum]}</Styled.Vote>
          <Styled.Host>
            <Scroller timer={CONFIG.scrollTimers.hostLabels}>
              {host.ticker?.map((ticker: string, index: number) => (
                <div key={index}>{ticker}</div>
              ))}
            </Scroller>
          </Styled.Host>
        </Styled.HostWrapper3>
      )}

      {!threeUp && (
        <Styled.HostWrapper seat={seatNumber}>
          <Styled.Vote>{voting[host.seatNum]}</Styled.Vote>
          <Styled.Host>
            <Scroller timer={CONFIG.scrollTimers.hostLabels}>
              {host.ticker?.map((ticker: string, index: number) => (
                <div key={index}>{ticker}</div>
              ))}
            </Scroller>
          </Styled.Host>
        </Styled.HostWrapper>
      )}
    </>
  ) : null;
};
