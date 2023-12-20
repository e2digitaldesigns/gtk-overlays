import * as React from "react";
import * as Styled from "./TheHost.style";
import { Scroller } from "../../../../../globalComponents";
import CONFIG from "../../config.json";

import { useDataContext } from "../../../../../context";
import { useVoting } from "../../../../../hooks";

interface ITheHostProps {
  type?: string;
  seatNumber?: number;
  votePosition?: string;
}

const TheHost: React.FC<ITheHostProps> = ({
  type = "host",
  seatNumber = 0,
  votePosition = "br"
}) => {
  const { hosts } = useDataContext();
  const { votingState } = useVoting();

  const host =
    type === "host" && hosts.find(host => host.seatNum === seatNumber);

  return host ? (
    <>
      <Styled.HostBoxWrapper>
        <Styled.HostBoxStroke />
        <Styled.HostBox>
          <Styled.HostBoxInner>
            {type === "host" && (
              <>
                <Styled.NameTag>
                  <Scroller timer={CONFIG.scrollTimers.hostLabels}>
                    {host.ticker?.map((ticker: string, index: number) => (
                      <div key={index}>{ticker}</div>
                    ))}
                  </Scroller>
                </Styled.NameTag>
                <Styled.HostVote votePosition={votePosition}>
                  {votingState[host.seatNum]}
                </Styled.HostVote>{" "}
              </>
            )}
          </Styled.HostBoxInner>
        </Styled.HostBox>
      </Styled.HostBoxWrapper>
    </>
  ) : null;
};

export default TheHost;
