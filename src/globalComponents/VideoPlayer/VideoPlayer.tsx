import React from "react";
import * as Styled from "./VideoPlayer.styles";
import socketServices from "../../services/socketServices";
import { RequestType, SocketServicesData } from "../../types";
import { useSimpleTopic } from "../../hooks";
import { Dimensions, IntVideoProps, VideoAction } from "./VideoPlayer.types";
import {
  decreaseVolumeWithDelay,
  increaseVolumeWithDelay
} from "./Utils/Volume";
import useVideoPlayerDataStore from "../../dataStores/useVideoPlayerDataStore/useVideoPlayerDataStore";

const GTK_VideoComponent: React.FC<IntVideoProps> = ({
  defaultSize = "normal",
  dimensions,
  bgColor = "black",
  allowSmallScreen = false,
  smallScreenDimensions,
  allowFullScreen = false,
  fullScreenDimensions,

  videoBorder = "none",
  videoShadow = false,
  hideVideoOnChange = false,
  transitionOnMove = true,

  showVideoOnLoad = false
}) => {
  const { topic, topicId } = useSimpleTopic();
  const videoUrl = topic?.video;
  const queryParams = new URLSearchParams(window.location.search);
  const videoPlayerWrapperRef = React.useRef<HTMLDivElement>(null);
  const videoPlayerRef = React.useRef<HTMLVideoElement>(null);
  const isMutedRef = React.useRef(false);
  const mutedVolumeRef = React.useRef(0);

  const { setVideoPlayerProperty } = useVideoPlayerDataStore(state => state);

  const [videoSize, setVideoSize] = React.useState<string>(defaultSize);
  const [showVideo, setShowVideo] = React.useState<boolean>(false);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState<boolean>(false);

  React.useEffect(() => {
    setVideoPlayerProperty("topicId", topicId);
    setVideoPlayerProperty("videoUrl", videoUrl);
    setVideoPlayerProperty("videoSize", videoSize);
    setVideoPlayerProperty("isVideoPlaying", isVideoPlaying);
    setVideoPlayerProperty("isVideoViewable", showVideo);
  }, [
    topicId,
    videoUrl,
    videoSize,
    isVideoPlaying,
    showVideo,

    setVideoPlayerProperty
  ]);

  React.useEffect(() => {
    if (!videoPlayerRef?.current || !videoPlayerWrapperRef.current) return;
    const opacity = showVideo ? "1" : "0";
    videoPlayerRef.current.style.opacity = opacity;
    videoPlayerWrapperRef.current.style.opacity = opacity;
  }, [showVideo]);

  React.useEffect(
    () => {
      if (videoPlayerWrapperRef.current && videoPlayerRef.current && videoUrl) {
        videoPlayerRef.current.src = videoUrl;
        videoPlayerRef.current.load();

        if (!hideVideoOnChange) {
          videoPlayerRef.current.currentTime = 2;
          showVideoOnLoad && setShowVideo(true);
          if (isVideoPlaying) {
            setShowVideo(true);
            videoPlayerRef.current.play();
          }
        } else {
          setShowVideo(false);
          setIsVideoPlaying(false);
        }
      } else {
        setShowVideo(false);
        setIsVideoPlaying(false);
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topicId, videoUrl]
  );

  React.useEffect(() => {
    socketServices.subscribeOverlaysVideoPlayer(
      (err: unknown, data: SocketServicesData) => {
        if (err) return;

        if (data?.uid !== queryParams.get(RequestType.UserId)) return;
        if (data?.tid !== queryParams.get(RequestType.Template)) return;
        if (!videoPlayerRef?.current || !videoPlayerWrapperRef.current) return;

        switch (data.action) {
          case VideoAction.PLAY:
            videoPlayerRef.current?.play().then(() => {
              setShowVideo(true);
              setIsVideoPlaying(true);
            });
            break;

          case VideoAction.PAUSE:
            videoPlayerRef.current.pause();
            setIsVideoPlaying(false);
            break;

          case VideoAction.STOP:
            videoPlayerRef.current?.pause();
            videoPlayerRef.current.currentTime = 0;
            setShowVideo(false);
            setIsVideoPlaying(false);
            break;

          case VideoAction.VOLUME_DOWN:
            if (videoPlayerRef.current?.volume !== undefined) {
              let newVolumeDown = videoPlayerRef.current.volume - 0.1;
              isMutedRef.current = false;
              videoPlayerRef.current.volume =
                newVolumeDown < 0 ? 0 : newVolumeDown;

              setVideoPlayerProperty(
                "videoVolume",
                String(videoPlayerRef.current.volume)
              );
            }
            break;

          case VideoAction.VOLUME_UP:
            if (videoPlayerRef.current?.volume !== undefined) {
              let newVolumeUp = videoPlayerRef.current.volume + 0.1;
              videoPlayerRef.current.volume = newVolumeUp > 1 ? 1 : newVolumeUp;
              isMutedRef.current = false;
              setVideoPlayerProperty(
                "videoVolume",
                String(videoPlayerRef.current.volume)
              );
            }
            break;

          case VideoAction.VOLUME_MUTE:
            if (isMutedRef.current === false) {
              isMutedRef.current = true;
              mutedVolumeRef.current = videoPlayerRef.current.volume;

              decreaseVolumeWithDelay(videoPlayerRef);
            } else if (isMutedRef.current === true) {
              isMutedRef.current = false;
              increaseVolumeWithDelay(videoPlayerRef, mutedVolumeRef.current);
              mutedVolumeRef.current = 0;
            }

            setVideoPlayerProperty("isVideoMuted", isMutedRef.current);
            break;

          case VideoAction.SEEK_FORWARD:
            if (videoPlayerRef.current?.currentTime !== undefined) {
              videoPlayerRef.current.currentTime += 10;
            }
            break;

          case VideoAction.SEEK_BACKWARD:
            if (videoPlayerRef.current?.currentTime !== undefined) {
              videoPlayerRef.current.currentTime -= 10;
            }
            break;

          case VideoAction.VIEW_TOGGLE:
            setShowVideo(prev => !prev);

            break;

          case VideoAction.SIZE_SMALL:
            if (!allowSmallScreen || !smallScreenDimensions) return;
            setVideoSize("small");

            videoPlayerWrapperRef.current.style.top = smallScreenDimensions.top;
            videoPlayerWrapperRef.current.style.left =
              smallScreenDimensions.left;
            videoPlayerWrapperRef.current.style.width =
              smallScreenDimensions.width;
            videoPlayerWrapperRef.current.style.height =
              smallScreenDimensions.height;
            break;

          case VideoAction.SIZE_NORMAL:
            setVideoSize("normal");

            videoPlayerWrapperRef.current.style.top = dimensions.top;
            videoPlayerWrapperRef.current.style.left = dimensions.left;
            videoPlayerWrapperRef.current.style.width = dimensions.width;
            videoPlayerWrapperRef.current.style.height = dimensions.height;
            break;

          case VideoAction.SIZE_FULLSCREEN:
            if (!allowFullScreen || !fullScreenDimensions) return;
            setVideoSize("fullscreen");

            videoPlayerWrapperRef.current.style.top = fullScreenDimensions.top;
            videoPlayerWrapperRef.current.style.left =
              fullScreenDimensions.left;
            videoPlayerWrapperRef.current.style.width =
              fullScreenDimensions.width;
            videoPlayerWrapperRef.current.style.height =
              fullScreenDimensions.height;
            break;

          default:
            break;
        }
      }
    );

    return () => {
      socketServices.unSubscribeOverlaysVideoPlayer();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theVideoSize: { [key: string]: Dimensions } = {
    small: smallScreenDimensions || dimensions,
    normal: dimensions,
    fullscreen: fullScreenDimensions || dimensions
  };

  return videoUrl ? (
    <Styled.VideoPlayerWrapper
      ref={videoPlayerWrapperRef}
      bgColor={bgColor}
      top={theVideoSize[videoSize].top}
      left={theVideoSize[videoSize].left}
      width={theVideoSize[videoSize].width}
      height={theVideoSize[videoSize].height}
      border={videoBorder}
      shadow={videoShadow}
      isFullscreen={videoSize === "fullscreen"}
      transitionOnMove={transitionOnMove}
    >
      <Styled.VideoPlayer ref={videoPlayerRef} />
    </Styled.VideoPlayerWrapper>
  ) : null;
};

export default GTK_VideoComponent;
