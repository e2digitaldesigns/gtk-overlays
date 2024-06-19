import React from "react";
import { useParams } from "../../../../hooks";
import { SectionsESPN } from "../../../../types";
import { VideoPlayer } from "../../../../globalComponents";
import useVideoPlayerDataStore from "../../../../dataStores/useVideoPlayerDataStore/useVideoPlayerDataStore";
import { VideoSize } from "../../../../globalComponents/VideoPlayer/VideoPlayer.types";
import { theme } from "../Theme/GlobalTheme";

export const VideoESPN: React.FC = () => {
  const { showSection } = useParams();
  const { videoSize } = useVideoPlayerDataStore();
  if (!showSection(SectionsESPN.Video)) return null;

  const videoBorder =
    videoSize !== "fullscreen" ? `5px solid ${theme.colors.accent2}` : "none";

  const indexObj: { [key: string]: number } = {
    normal: 10,
    custom1: 10,
    fullscreen: 99999
  };

  return (
    <VideoPlayer
      defaultSize={VideoSize.NORMAL}
      dimensions={{
        top: "180px",
        left: "320px",
        width: "940px",
        height: "535px"
      }}
      fullScreenDimensions={{
        top: "0px",
        left: "0px",
        width: "1920px",
        height: "1080px"
      }}
      customDimensions1={{
        top: "150px",
        left: "10px",
        width: "1260px",
        height: "650px"
      }}
      videoBorder={videoBorder}
      videoShadow={true}
      zIndex={indexObj[videoSize]}
    />
  );
};
