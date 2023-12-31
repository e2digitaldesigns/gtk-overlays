import React from "react";
import * as Styled from "./Timing.styles";
import { TimerOrTime } from "../../../../../../globalComponents";

export const Timing: React.FC = () => {
  return (
    <Styled.TimingWrapper>
      <TimerOrTime fontSize="2rem" />
    </Styled.TimingWrapper>
  );
};
