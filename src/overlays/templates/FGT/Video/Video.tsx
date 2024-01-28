import React from "react";
import { useParams } from "../../../../hooks";
import { SectionsFGT } from "../../../../types";

import { VideoPlayer, BGTextScroll } from "../../../../globalComponents";

import { theme } from "../Theme/GlobalTheme";
import { useDataContext } from "../../../../context";
import useVideoPlayerDataStore from "../../../../dataStores/useVideoPlayerDataStore/useVideoPlayerDataStore";

export const VideoFGT: React.FC = () => {
  const { showSection } = useParams();
  const data = useDataContext();

  const [isScrollBgVisible, setIsScrollBgVisible] = React.useState(false);
  const { videoSize } = useVideoPlayerDataStore(state => state);

  React.useEffect(() => {
    setIsScrollBgVisible(videoSize === "fullscreen");
  }, [videoSize]);

  if (!showSection(SectionsFGT.Video)) return null;

  return (
    <>
      <div style={{ position: "absolute", zIndex: 99999 }}>
        <VideoPlayer
          dimensions={{
            top: "170px",
            left: "310px",
            width: "1280px",
            height: "720px"
          }}
          allowFullScreen={true}
          fullScreenDimensions={{
            top: "-10px",
            left: "-10px",
            width: "1920px",
            height: "1080px"
          }}
          videoBorder={`10px solid ${theme.colors.accent1}`}
          videoShadow={true}
        />

        <BGTextScroll
          text={data?.podcastName}
          bgColor="#000"
          fontColor1={theme.colors.accent1}
          fontColor2="#222"
          isVisible={isScrollBgVisible}
        />
      </div>{" "}
    </>
  );
};
