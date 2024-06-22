import React from "react";
import * as Styled from "./VideoPlayer.styles";
import socketServices from "../../services/socketServices";
import { RequestType, SocketServicesData } from "../../types";
import { useSimpleTopic } from "../../hooks";
import {
  DimensionMap,
  IntVideoProps,
  VideoAction,
  VideoSize
} from "./VideoPlayer.types";
import useVideoPlayerDataStore from "../../dataStores/useVideoPlayerDataStore/useVideoPlayerDataStore";
import { useVideoActions } from "./useVideoActions";

const GTK_VideoComponent: React.FC<IntVideoProps> = ({
  defaultSize = VideoSize.NORMAL,
  bgColor = "black",
  dimensions,
  smallScreenDimensions,
  fullScreenDimensions,
  customDimensions1,
  customDimensions2,
  customDimensions3,
  videoBorder = "none",
  videoShadow = false,
  transitionOnMove = true,
  showVideoOnLoad = false,
  playOnLoad = false,
  zIndex = 9999
}) => {
  const { topic, topicId } = useSimpleTopic();
  const contentFile = topic.content?.file;
  const queryParams = new URLSearchParams(window.location.search);
  const videoPlayerWrapperRef = React.useRef<HTMLDivElement>(null);
  const { setVideoSizing, volumeDecrease, volumeIncrease } = useVideoActions();

  const isMutedRef = React.useRef(false);
  const mutedVolumeRef = React.useRef(0);

  const { setVideoPlayerProperty } = useVideoPlayerDataStore(state => state);

  const [videoSize, setVideoSize] = React.useState<string>(defaultSize);
  const [showVideo, setShowVideo] = React.useState<boolean>(false);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState<boolean>(false);

  const videoPlayerRef = React.useRef<HTMLVideoElement>(null);
  const imageViewerRef = React.useRef<HTMLImageElement>(null);

  const dimensionMap: DimensionMap = {
    [VideoAction.SIZE_SMALL]: {
      videoSize: VideoSize.SMALL,
      dimensions: smallScreenDimensions
    },
    [VideoAction.SIZE_NORMAL]: {
      videoSize: VideoSize.NORMAL,
      dimensions
    },
    [VideoAction.SIZE_FULLSCREEN]: {
      videoSize: VideoSize.FULLSCREEN,
      dimensions: fullScreenDimensions
    },
    [VideoAction.SIZE_CUSTOM_1]: {
      videoSize: VideoSize.CUSTOM_1,
      dimensions: customDimensions1
    },
    [VideoAction.SIZE_CUSTOM_2]: {
      videoSize: VideoSize.CUSTOM_2,
      dimensions: customDimensions2
    },
    [VideoAction.SIZE_CUSTOM_3]: {
      videoSize: VideoSize.CUSTOM_3,
      dimensions: customDimensions3
    }
  };

  React.useEffect(() => {
    setVideoPlayerProperty("topicId", topicId);
    setVideoPlayerProperty("videoUrl", contentFile);
    setVideoPlayerProperty("videoSize", videoSize);
    setVideoPlayerProperty("isVideoPlaying", isVideoPlaying);
    setVideoPlayerProperty("isVideoViewable", showVideo);
  }, [
    topicId,
    contentFile,
    videoSize,
    isVideoPlaying,
    showVideo,

    setVideoPlayerProperty
  ]);

  React.useEffect(() => {
    const opacity = showVideo ? "1" : "0";

    if (videoPlayerRef?.current && videoPlayerWrapperRef.current) {
      videoPlayerRef.current.style.opacity = opacity;
      videoPlayerWrapperRef.current.style.opacity = opacity;
    }

    if (videoPlayerWrapperRef.current && imageViewerRef.current) {
      imageViewerRef.current.style.opacity = opacity;
      videoPlayerWrapperRef.current.style.opacity = opacity;
    }
  }, [showVideo]);

  React.useEffect(() => {
    setShowVideo(false);
    setIsVideoPlaying(false);

    if (
      videoPlayerWrapperRef.current &&
      videoPlayerRef.current &&
      contentFile
    ) {
      videoPlayerRef.current.src = `${contentFile}?nocache=${new Date().getTime()}`;
      videoPlayerRef.current.load();
      videoPlayerRef.current.currentTime = 1;

      if (playOnLoad) {
        videoPlayerRef.current.play();
        setShowVideo(true);
        setIsVideoPlaying(true);
        return;
      } else if (showVideoOnLoad) {
        setShowVideo(true);
        return;
      }
    }

    if (
      videoPlayerWrapperRef.current &&
      imageViewerRef.current &&
      contentFile &&
      showVideoOnLoad
    ) {
      console.log(129);
      setShowVideo(true);
      videoPlayerWrapperRef.current.style.opacity = "1";
    }
  }, [playOnLoad, showVideoOnLoad, topicId, contentFile]);

  React.useEffect(() => {
    socketServices.subscribeOverlaysVideoPlayer(
      (err: unknown, data: SocketServicesData) => {
        if (err) return;
        if (data?.uid !== queryParams.get(RequestType.UserId)) return;
        if (data?.tid !== queryParams.get(RequestType.Template)) return;
        if (!videoPlayerWrapperRef.current) return;

        if (imageViewerRef.current) {
          switch (data.action) {
            case VideoAction.PLAY:
              setShowVideo(true);
              videoPlayerWrapperRef.current.style.opacity = "1";
              break;

            case VideoAction.STOP:
            case VideoAction.PAUSE:
              setShowVideo(false);
              videoPlayerWrapperRef.current.style.opacity = "0";
              break;

            case VideoAction.SIZE_SMALL:
            case VideoAction.SIZE_NORMAL:
            case VideoAction.SIZE_FULLSCREEN:
            case VideoAction.SIZE_CUSTOM_1:
            case VideoAction.SIZE_CUSTOM_2:
            case VideoAction.SIZE_CUSTOM_3:
              setVideoSizing(
                videoPlayerWrapperRef,
                data.action,
                dimensionMap,
                setVideoSize
              );
              break;
          }
        }

        if (videoPlayerRef.current) {
          switch (data.action) {
            case VideoAction.PLAY:
              videoPlayerRef.current?.play().then(() => {
                setShowVideo(true);
                setIsVideoPlaying(true);
              });
              break;

            case VideoAction.PAUSE:
              videoPlayerRef?.current?.pause();
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
                videoPlayerRef.current.volume =
                  newVolumeUp > 1 ? 1 : newVolumeUp;
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

                volumeDecrease(videoPlayerRef);
              } else if (isMutedRef.current === true) {
                isMutedRef.current = false;
                volumeIncrease(videoPlayerRef, mutedVolumeRef.current);
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
            case VideoAction.SIZE_NORMAL:
            case VideoAction.SIZE_FULLSCREEN:
            case VideoAction.SIZE_CUSTOM_1:
            case VideoAction.SIZE_CUSTOM_2:
            case VideoAction.SIZE_CUSTOM_3:
              setVideoSizing(
                videoPlayerWrapperRef,
                data.action,
                dimensionMap,
                setVideoSize
              );
              break;

            default:
              break;
          }
        }
      }
    );

    return () => {
      socketServices.unSubscribeOverlaysVideoPlayer();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playerDimensions =
    Object.values(dimensionMap).find(value => value.videoSize === videoSize)
      ?.dimensions || dimensions;

  if (topic?.content?.type === "video") {
    return (
      <Styled.VideoPlayerWrapper
        ref={videoPlayerWrapperRef}
        bgColor={bgColor}
        top={playerDimensions.top}
        left={playerDimensions.left}
        width={playerDimensions.width}
        height={playerDimensions.height}
        border={videoBorder}
        shadow={videoShadow}
        isFullscreen={videoSize === "fullscreen"}
        transitionOnMove={transitionOnMove}
        zIndex={zIndex}
      >
        <Styled.VideoPlayer ref={videoPlayerRef} />
      </Styled.VideoPlayerWrapper>
    );
  }

  if (topic?.content?.type === "image") {
    return (
      <Styled.VideoPlayerWrapper
        ref={videoPlayerWrapperRef}
        bgColor={bgColor}
        top={playerDimensions.top}
        left={playerDimensions.left}
        width={playerDimensions.width}
        height={playerDimensions.height}
        border={videoBorder}
        shadow={videoShadow}
        isFullscreen={videoSize === "fullscreen"}
        transitionOnMove={transitionOnMove}
        zIndex={zIndex}
      >
        <Styled.ImagePlayer ref={imageViewerRef} src={contentFile} />
      </Styled.VideoPlayerWrapper>
    );
  }

  return null;
};

export default GTK_VideoComponent;
