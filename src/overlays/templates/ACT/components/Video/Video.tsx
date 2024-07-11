import React from "react";
import { useParams } from "../../../../../hooks";
import { SectionsACT } from "../../../../../types";

import { VideoPlayer, BGTextScroll } from "../../../../../globalComponents";

import { theme } from "../../Theme/GlobalTheme";
import { useDataContext } from "../../../../../context";
import useVideoPlayerDataStore from "../../../../../dataStores/useVideoPlayerDataStore/useVideoPlayerDataStore";
import { VideoSize } from "../../../../../globalComponents/VideoPlayer/VideoPlayer.types";

const VideoACT: React.FC = () => {
  const { showSection } = useParams();
  const data = useDataContext();

  const [isScrollBgVisible, setIsScrollBgVisible] = React.useState(false);
  const { videoSize, isVideoViewable } = useVideoPlayerDataStore();

  React.useEffect(() => {
    const showBG = videoSize === "normal" || videoSize === "fullscreen";
    setIsScrollBgVisible(showBG && isVideoViewable);
  }, [videoSize, isVideoViewable]);

  if (!showSection(SectionsACT.Video)) return null;

  const videoBorder = videoSize !== "fullscreen" ? `3px solid ${theme.colors.accent4}` : "none";

  return (
    <>
      <div style={{ position: "absolute", zIndex: 99999 }}>
        <VideoPlayer
          customDimensions1={{
            top: "225px",
            left: "40px",
            width: "1218px",
            height: "545px"
          }}
          customDimensions2={{
            top: "225px",
            left: "663px",
            width: "1218px",
            height: "545px"
          }}
          defaultSize={VideoSize.NORMAL}
          dimensions={{
            top: "170px",
            left: "310px",
            width: "1280px",
            height: "720px"
          }}
          fullScreenDimensions={{
            top: "0px",
            left: "0px",
            width: "1920px",
            height: "1080px"
          }}
          videoBorder={videoBorder}
          videoShadow={true}
        />

        <BGTextScroll
          text={data?.podcastName}
          bgColor={theme.colors.bg1}
          fontColor1={theme.colors.accent4}
          fontColor2="#222"
          isVisible={isScrollBgVisible}
        />
      </div>{" "}
    </>
  );
};

export default VideoACT;
