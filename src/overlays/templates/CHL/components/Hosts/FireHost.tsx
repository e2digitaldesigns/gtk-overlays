import React from "react";
import styled from "styled-components";

import useVotingHook from "../../../../../hooks/useVotingHook/useVotingHook";

const videoFire =
  "https://mg-show-assets.s3.us-east-1.amazonaws.com/images/fire.mp4";

interface IFireHostProps {
  fireCount?: number;
  seatNum: number;
}

const StyledFirePlayer = styled.video`
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
`;

export const FireHost: React.FC<IFireHostProps> = ({
  fireCount = 3,
  seatNum
}) => {
  const { votes } = useVotingHook();
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const lastFiveElements = votes.slice(-fireCount);
    const sameHost = lastFiveElements.every(
      item => item.host === String(seatNum) && item.action === "add"
    );

    const playFire = sameHost && lastFiveElements.length === fireCount;

    if (!videoRef.current) return;

    if (playFire) {
      videoRef.current.play();
      videoRef.current.style.opacity = "1";
    } else {
      setTimeout(() => {
        videoRef.current && videoRef.current.pause();
      }, 1500);
      videoRef.current.style.opacity = "0";
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seatNum, votes]);

  return (
    <StyledFirePlayer muted loop ref={videoRef}>
      <source src={videoFire} type="video/mp4" />
    </StyledFirePlayer>
  );
};
