import React from "react";
import * as Styled from "./Video.styles";

import { useParams, useSimpleTopic } from "../../../../../hooks";
import { SectionsCNN } from "../../../../../types";

import { VideoPlayer } from "../../../../../globalComponents";

import { BsYoutube } from "react-icons/bs";
import useVideoPlayerDataStore from "../../../../../dataStores/useVideoPlayerDataStore/useVideoPlayerDataStore";
import { VideoSize } from "../../../../../globalComponents/VideoPlayer/VideoPlayer.types";

export const VideoCNN: React.FC = () => {
  const { showSection } = useParams();
  const { topic: activeTopic } = useSimpleTopic();
  const { isVideoViewable, videoSize } = useVideoPlayerDataStore(state => state);
  const showTopic = videoSize === VideoSize.SMALL && isVideoViewable;

  if (!showSection(SectionsCNN.Video)) return null;

  return (
    <>
      <VideoPlayer
        bgColor={videoSize === VideoSize.NORMAL ? "transparent" : "black"}
        defaultSize={VideoSize.SMALL}
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
        videoBorder="1px solid black"
      />

      <Styled.VideoBorderTop isVisible={showTopic} />

      <Styled.VideoTopicWrapper>
        <Styled.VideoTopicInner isVisible={showTopic}>
          <BsYoutube size={36} color="white" />
          <div>{activeTopic?.name}</div>
        </Styled.VideoTopicInner>
      </Styled.VideoTopicWrapper>
    </>
  );
};
