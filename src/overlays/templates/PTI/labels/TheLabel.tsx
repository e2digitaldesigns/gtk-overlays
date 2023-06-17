import React from "react";
import * as Styled from "./Label.style";
import { Scroller } from "../../../../globalComponents";
import { useParams } from "../../../../hooks";
import { SectionsPTI } from "../../../../types";

import CONFIG from "../config.json";
import useVotingHook from "../../../../hooks/useVotingHook/useVotingHook";

interface ITheHostLabel {
  hostNum: string;
  seat: string;
  section: SectionsPTI;
  tickerArr: string[];
}

export const TheHostLabel: React.FC<ITheHostLabel> = ({
  hostNum,
  seat,
  section,
  tickerArr
}) => {
  const { showSection } = useParams();
  const { voting } = useVotingHook();

  return showSection(section) ? (
    <>
      <Styled.HostWrapper seat={seat}>
        <Styled.Vote>{voting[hostNum]}</Styled.Vote>
        <Styled.Host>
          <Scroller timer={CONFIG.scrollTimers.hostLabels}>
            {tickerArr?.map((ticker: string, index: number) => (
              <div key={index}>{ticker}</div>
            ))}
          </Scroller>
        </Styled.Host>
      </Styled.HostWrapper>
    </>
  ) : null;
};
