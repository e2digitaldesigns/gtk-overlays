import React from "react";
import { useParams } from "../../../../../hooks";
import { SectionsCHL } from "../../../../../types";

import { VideoPlayer, BGTextScroll } from "../../../../../globalComponents";

import { theme } from "../../Theme/GlobalTheme";
import { useDataContext } from "../../../../../context";

interface VideoProps {
  topicId: string | undefined;
  topicVideo: string | undefined;
}

const VideoCHL: React.FC<VideoProps> = ({ topicId, topicVideo }) => {
  const { showSection } = useParams();
  const data = useDataContext();

  const [isScrollBgVisible, setIsScrollBgVisible] = React.useState(false);

  if (!showSection(SectionsCHL.Video)) return null;

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
          bgColor={theme.colors.bg1}
          fontColor={theme.colors.accent1}
          isVisible={isScrollBgVisible}
        />
      </div>{" "}
    </>
  );
};

export default VideoCHL;
