import * as React from "react";
import * as Styled from "./TheHost.style";
import { Scroller } from "../../../../../globalComponents";
import CONFIG from "../../config.json";

import { useDataContext } from "./../../../../../context";
import useVotingHook from "../../../../../hooks/useVotingHook/useVotingHook";

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
  const { voting } = useVotingHook();

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
                  {voting[host.seatNum]}
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
