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
    videoSize !== "fullscreen" ? `2px solid ${theme.colors.accent1}` : "none";

  return (
    <>
      <div style={{ position: "absolute", zIndex: 99999 }}>
        <VideoPlayer
          defaultSize={VideoSize.NORMAL}
          dimensions={{
            top: "180px",
            left: "330px",
            width: "940px",
            height: "535px"
          }}
          allowFullScreen={true}
          fullScreenDimensions={{
            top: "0px",
            left: "0px",
            width: "1920px",
            height: "1080px"
          }}
          videoBorder={videoBorder}
        />
      </div>{" "}
    </>
  );
};
