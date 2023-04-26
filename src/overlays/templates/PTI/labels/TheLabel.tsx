import React from "react";
import * as Styled from "./Label.style";
import { Scroller } from "../../../../globalComponents";
import { useParams } from "../../../../hooks";
import { SectionsPTI } from "../../../../types";

import CONFIG from "../config.json";

interface ITheHostLabel {
  seat: string;
  section: SectionsPTI;
  tickerArr: string[];
}

export const TheHostLabel: React.FC<ITheHostLabel> = ({
  seat,
  section,
  tickerArr
}) => {
  const { showSection } = useParams();
  return showSection(section) ? (
    <Styled.Host seat={seat}>
      <Scroller timer={CONFIG.scrollTimers.hostLabels}>
        {tickerArr?.map((ticker: string, index: number) => (
          <div key={index}>{ticker}</div>
        ))}
      </Scroller>
    </Styled.Host>
  ) : null;
};
