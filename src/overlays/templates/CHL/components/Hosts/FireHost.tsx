import React from "react";
import styled from "styled-components";
import { IVoteStreaks } from "../../../../../types";

const videoFireGif =
  "https://mg-show-assets.s3.us-east-1.amazonaws.com/images/fire.gif";

interface IFireHostProps {
  fireCount?: number;
  seatNum: number;
  votingStreak: IVoteStreaks;
}

const StyledFirePlayer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  img {
    width: 100%;
    position: absolute;
    bottom: -50px;
    left: 0;
    z-index: -5;
  }
`;

export const FireHost: React.FC<IFireHostProps> = ({
  fireCount = 3,
  seatNum,
  votingStreak
}) => {
  const fireRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const playFire = votingStreak[seatNum]?.add >= fireCount;
    if (!fireRef.current) return;
    fireRef.current.style.opacity = playFire ? "1" : "0";

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seatNum, votingStreak]);

  return (
    <StyledFirePlayer ref={fireRef}>
      <img src={videoFireGif} alt="fire" />
    </StyledFirePlayer>
  );
};
