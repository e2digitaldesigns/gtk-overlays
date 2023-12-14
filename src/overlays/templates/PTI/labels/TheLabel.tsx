import React from "react";
import * as Styled from "./Label.style";
import { Scroller } from "../../../../globalComponents";

import CONFIG from "../config.json";
import { useDataContext } from "../../../../context";
import { useVoting } from "../../../../hooks";

interface ITheHostLabel {
  seatNumber: number;
}

export const TheHostLabel: React.FC<ITheHostLabel> = ({ seatNumber }) => {
  const { hosts } = useDataContext();
  const { voting } = useVoting();

  const host = hosts.find(host => host.seatNum === seatNumber);

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
