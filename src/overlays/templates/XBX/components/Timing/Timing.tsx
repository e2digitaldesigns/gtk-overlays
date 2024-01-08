import React from "react";
import * as Styled from "./Timing.styles";
import { TimeItem } from "../../../../../globalComponents";
import { Scroller } from "../../../../../globalComponents";
import CONFIG from "../../config.json";
import { SectionsXBX } from "../../../../../types";
import { useParams } from "../../../../../hooks";

export const TimingXBX: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsXBX.Clock)) return null;

  return (
    <Styled.TimingWrapper>
      <Scroller timer={CONFIG.scrollTimers.timing} transition="scroll">
        <TimeItem hour={0} zone="est" />
        <TimeItem hour={1} zone="ct" />
        <TimeItem hour={2} zone="mt" />
        <TimeItem hour={3} zone="pt" />
      </Scroller>
    </Styled.TimingWrapper>
  );
};
