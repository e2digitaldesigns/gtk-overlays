import React from "react";
import { useParams } from "../../../../hooks";
import { SectionsPTI } from "../../../../types";

import { VideoPlayer } from "../../../../globalComponents";

interface VideoProps {
  topicId: string | undefined;
  topicVideo: string | undefined;
}

const VideoPTI: React.FC<VideoProps> = ({ topicId, topicVideo }) => {
  const { showSection } = useParams();
  console.log({ topicVideo });

  if (!showSection(SectionsPTI.Video)) return null;

  return (
    <VideoPlayer
      allowFullScreen={true}
      allowSmallScreen={true}
      dimensions={{
        top: "0px",
        left: "0px",
        width: "1520px",
        height: "860px"
      }}
      fullScreenDimensions={{
        top: "0px",
        left: "0px",
        width: "1920px",
        height: "1080px"
      }}
      smallScreenDimensions={{
        top: "0px",
        left: "1520px",
        width: "400px",
        height: "220px"
      }}
      topicId={topicId}
      videoUrl={topicVideo}
    />
  );
};

export default VideoPTI;
