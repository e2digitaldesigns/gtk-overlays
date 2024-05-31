import React from "react";
import { useParams } from "../../../../../hooks";
import { SectionsXBX } from "../../../../../types";

import { VideoPlayer } from "../../../../../globalComponents";

const VideoXBX: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsXBX.Video)) return null;

  return (
    <VideoPlayer
      dimensions={{
        top: "20px",
        left: "105px",
        width: "1300px",
        height: "700px"
      }}
      fullScreenDimensions={{
        top: "0px",
        left: "0px",
        width: "1920px",
        height: "1080px"
      }}
      smallScreenDimensions={{
        top: "740px",
        left: "105px",
        width: "390px",
        height: "230px"
      }}
      videoBorder="1px solid black"
    />
  );
};

export default VideoXBX;
