import React from "react";
import { useParams } from "../../../../hooks";
import { SectionsFGT } from "../../../../types";

import { VideoPlayer, BGTextScroll } from "../../../../globalComponents";

import { theme } from "../Theme/GlobalTheme";
import { useDataContext } from "../../../../context";

interface VideoProps {
  topicId: string | undefined;
  topicVideo: string | undefined;
}

export const VideoFGT: React.FC<VideoProps> = ({ topicId, topicVideo }) => {
  const { showSection } = useParams();
  const data = useDataContext();

  const [isScrollBgVisible, setIsScrollBgVisible] = React.useState(false);

  if (!showSection(SectionsFGT.Video)) return null;

  const handleVideoCallBack = (isVideoVisible: boolean) => {
    setIsScrollBgVisible(isVideoVisible);
  };

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
          topicId={topicId}
          videoUrl={topicVideo}
          allowFullScreen={true}
          fullScreenDimensions={{
            top: "-10px",
            left: "-10px",
            width: "1920px",
            height: "1080px"
          }}
          videoBorder={`10px solid ${theme.colors.accent1}`}
          videoShadow={true}
          callBack={handleVideoCallBack}
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
