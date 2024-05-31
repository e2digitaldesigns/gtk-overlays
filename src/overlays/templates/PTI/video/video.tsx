import React from "react";
import { useParams } from "../../../../hooks";
import { SectionsPTI } from "../../../../types";

import { VideoPlayer } from "../../../../globalComponents";

const VideoPTI: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsPTI.Video)) return null;

  return (
    <VideoPlayer
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
    />
  );
};

export default VideoPTI;
