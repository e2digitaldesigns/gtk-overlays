import React from "react";
import * as Styled from "./Timing.styles";
import { TimeItem } from "../../../../../globalComponents";
import { Scroller } from "../../../../../globalComponents";

export const TimingXBX: React.FC = () => {
  return (
    <Styled.TimingWrapper>
      <Scroller timer={3} transition="scroll">
        <TimeItem hour={0} zone="est" />
        <TimeItem hour={1} zone="ct" />
        <TimeItem hour={2} zone="mt" />
        <TimeItem hour={3} zone="pt" />
      </Scroller>
    </Styled.TimingWrapper>
  );
};
