import React from "react";
import * as Styled from "./Video.styles";

import { useParams, useSimpleTopic } from "../../../../../hooks";
import { SectionsCNN2 } from "../../../../../types";

import { VideoPlayer } from "../../../../../globalComponents";

import { BsYoutube } from "react-icons/bs";

export const VideoCNN: React.FC = () => {
  const { showSection } = useParams();
  const { topic: activeTopic } = useSimpleTopic();

  const [showTopic, setShowTopic] = React.useState(false);

  const handleVideoCallBack = (data: any) => {
    if (data.videoSize === "small" && data.isVideoVisible) {
      setShowTopic(true);
    } else {
      setShowTopic(false);
    }
  };

  if (!showSection(SectionsCNN2.Video)) return null;

  return (
    <>
      <VideoPlayer
        defaultSize="small"
        videoBorder="1px solid black"
        allowFullScreen={true}
        allowSmallScreen={true}
        callBack={handleVideoCallBack}
        dimensions={{
          top: "10px",
          left: "630px",
          width: "1280px",
          height: "630px"
        }}
        fullScreenDimensions={{
          top: "0px",
          left: "0px",
          width: "1920px",
          height: "1080px"
        }}
        smallScreenDimensions={{
          top: "185px",
          left: "10px",
          width: "610px",
          height: "345px"
        }}
      />

      <Styled.VideoBorderTop isVisible={showTopic} />

      <Styled.VideoTopic isVisible={showTopic}>
        <BsYoutube size={36} color="white" />
        <div>{activeTopic?.name}</div>
      </Styled.VideoTopic>
    </>
  );
};
