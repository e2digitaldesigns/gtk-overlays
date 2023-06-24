import React from "react";
import * as Styled from "./Label.style";
import { Scroller } from "../../../../globalComponents";

import CONFIG from "../config.json";
import useVotingHook from "../../../../hooks/useVotingHook/useVotingHook";
import { useDataContext } from "../../../../context";

interface ITheHostLabel {
  seatNumber: number;
}

export const TheHostLabel: React.FC<ITheHostLabel> = ({ seatNumber }) => {
  const { hosts } = useDataContext();
  const { voting } = useVotingHook();

  const host = hosts.find((host: any) => host.seatNum === seatNumber);

  return host ? (
    <>
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
    </>
  ) : null;
};
