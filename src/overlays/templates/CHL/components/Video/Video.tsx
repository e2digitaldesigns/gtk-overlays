import React from "react";
import { useParams } from "../../../../../hooks";
import { SectionsCHL } from "../../../../../types";

import { VideoPlayer, BGTextScroll } from "../../../../../globalComponents";

import { theme } from "../../Theme/GlobalTheme";
import { useDataContext } from "../../../../../context";
import useVideoPlayerDataStore from "../../../../../dataStores/useVideoPlayerDataStore/useVideoPlayerDataStore";
import { VideoSize } from "../../../../../globalComponents/VideoPlayer/VideoPlayer.types";

const VideoCHL: React.FC = () => {
  const { showSection } = useParams();
  const data = useDataContext();

  const [isScrollBgVisible, setIsScrollBgVisible] = React.useState(false);
  const { videoSize, isVideoViewable } = useVideoPlayerDataStore();

  React.useEffect(() => {
    const showBG = videoSize === "normal" || videoSize === "fullscreen";
    setIsScrollBgVisible(showBG && isVideoViewable);
  }, [videoSize, isVideoViewable]);

  if (!showSection(SectionsCHL.Video)) return null;

  const videoBorder =
    videoSize !== "fullscreen" ? `5px solid ${theme.colors.accent1}` : "none";

  return (
    <>
      <div style={{ position: "absolute", zIndex: 99999 }}>
        <VideoPlayer
          defaultSize={VideoSize.CUSTOM_2}
          dimensions={{
            top: "170px",
            left: "310px",
            width: "1280px",
            height: "720px"
          }}
          allowFullScreen={true}
          fullScreenDimensions={{
            top: "0px",
            left: "0px",
            width: "1920px",
            height: "1080px"
          }}
          videoBorder={videoBorder}
          videoShadow={true}
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
        />

        <BGTextScroll
          text={data?.podcastName}
          bgColor="#000"
          fontColor1={theme.colors.accent4}
          fontColor2="#222"
          isVisible={isScrollBgVisible}
        />
      </div>{" "}
    </>
  );
};

export default VideoCHL;
