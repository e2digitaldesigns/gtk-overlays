import React from "react";
import * as Styled from "./Timing.styles";
import { TimeItem, TimerItem } from "../../../../../../globalComponents";

import { Scroller } from "../../../../../../globalComponents";
import { IntTopic } from "../../../../../../globalComponents/Topics/types";

interface IntTiming {
  isTimerPaused: boolean;
  topic: IntTopic | undefined;
}
export const Timing: React.FC<IntTiming> = ({ isTimerPaused, topic }) => {
  return (
    <Styled.TimingWrapper>
      {topic?.timer ? (
        <TimerItem isTimerPaused={isTimerPaused} topic={topic} />
      ) : (
        <Scroller timer={33}>
          <TimeItem hour={0} zone="est" />
          <TimeItem hour={1} zone="ct" />
          <TimeItem hour={2} zone="mt" />
          <TimeItem hour={3} zone="pt" />
        </Scroller>
      )}
    </Styled.TimingWrapper>
  );
};
