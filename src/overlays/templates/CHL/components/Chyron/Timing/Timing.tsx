import React from "react";
import * as Styled from "./Timing.styles";
import { TimerOrTime } from "../../../../../../globalComponents";
import CONFIG from "../../../config.json";

export const Timing: React.FC = () => {
  return (
    <Styled.TimingWrapper>
      <TimerOrTime
        fontSize="1.5rem"
        scrollerTimer={CONFIG.scrollTimers.clock}
      />
    </Styled.TimingWrapper>
  );
};
