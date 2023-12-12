import * as React from "react";
import * as Styled from "./FireCountDisplay.style";

import CONFIG from "../../config.json";
import { IVoteStreaks } from "../../../../../hooks/useVotingHook/useVotngHookTypes";

interface FireCountDisplayProps {
  seatNum: number;
  votingStreak: IVoteStreaks;
}

const FireCountDisplay: React.FC<FireCountDisplayProps> = ({
  seatNum,
  votingStreak
}) => {
  const { fireHostCount } = CONFIG;
  const streak = votingStreak[seatNum];

  const streakArray = new Array(fireHostCount).fill(0);

  for (let i = 0; i < streak.add && i < fireHostCount; i++) {
    streakArray[i] = 1;
  }

  return (
    <>
      <Styled.FireCountWrapper>
        {streakArray.map((active: number, index: number) => (
          <Styled.FireCountDiv
            key={index}
            isActive={active}
          ></Styled.FireCountDiv>
        ))}
      </Styled.FireCountWrapper>
    </>
  );
};

export default FireCountDisplay;
