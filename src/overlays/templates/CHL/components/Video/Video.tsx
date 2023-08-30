import React from "react";
import { useParams } from "../../../../../hooks";
import { SectionsCHL } from "../../../../../types";

import { VideoPlayer } from "../../../../../globalComponents";

interface VideoProps {
  topicId: string | undefined;
  topicVideo: string | undefined;
}

const VideoCHL: React.FC<VideoProps> = ({ topicId, topicVideo }) => {
  const { showSection } = useParams();

  if (!showSection(SectionsCHL.Video)) return null;

  return (
    <VideoPlayer
      dimensions={{
        top: "0px",
        left: "0px",
        width: "1920px",
        height: "1080px"
      }}
      topicId={topicId}
      videoUrl={topicVideo}
    />
  );
};

export default VideoCHL;
