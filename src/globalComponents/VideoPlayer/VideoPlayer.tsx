import React from "react";
import * as Styled from "./VideoPlayer.styles";
import socketServices from "../../services/socketServices";
import { RequestType, SocketServicesData } from "../../types";
import { useSimpleTopic } from "../../hooks";
import {
  CallBackData,
  Dimensions,
  IntVideoProps,
  VideoAction
} from "./VideoPlayer.types";
import {
  decreaseVolumeWithDelay,
  increaseVolumeWithDelay
} from "./Utils/Volume";

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
  callBack,
  hideVideoOnChange = false
}) => {
  const { topic, topicId } = useSimpleTopic();
  const videoUrl = topic?.video;
  const queryParams = new URLSearchParams(window.location.search);
  const videoPlayerWrapperRef = React.useRef<HTMLDivElement>(null);
  const videoPlayerRef = React.useRef<HTMLVideoElement>(null);
  const isMutedRef = React.useRef(false);
  const mutedVolumeRef = React.useRef(0);

  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const [videoSize, setVideoSize] = React.useState<string>(defaultSize);
  const [showVideo, setShowVideo] = React.useState<boolean>(true);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState<boolean>(false);

  React.useEffect(() => {
    const data: CallBackData = {
      videoSize,
      isFullscreen: videoSize === "fullscreen",
      isVideoVisible: showVideo
    };

    callBack && callBack(data);
  }, [videoSize, showVideo, callBack, topicId]);

  React.useEffect(
    () => {
      if (videoPlayerWrapperRef.current && videoPlayerRef.current && videoUrl) {
        videoPlayerRef.current.src = videoUrl;
        videoPlayerRef.current.load();

        if (!hideVideoOnChange) {
          videoPlayerRef.current.currentTime = 2;
          videoPlayerRef.current.style.opacity = "1";
          videoPlayerWrapperRef.current.style.opacity = "1";
          setShowVideo(true);
          if (isVideoPlaying) {
            videoPlayerRef.current.play();
          }
        } else {
          setShowVideo(false);
          setIsVideoPlaying(false);
          videoPlayerRef.current.style.opacity = "0";
          videoPlayerWrapperRef.current.style.opacity = "0";
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
            videoPlayerWrapperRef.current.style.opacity = "1";
            videoPlayerRef.current.style.opacity = "1";
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
            setShowVideo(false);
            videoPlayerRef.current?.pause();
            videoPlayerWrapperRef.current.style.opacity = "0";
            videoPlayerRef.current.style.opacity = "0";
            videoPlayerRef.current.currentTime = 0;
            break;

          case VideoAction.VOLUME_DOWN:
            if (videoPlayerRef.current?.volume !== undefined) {
              let newVolumeDown = videoPlayerRef.current.volume - 0.1;
              isMutedRef.current = false;
              videoPlayerRef.current.volume =
                newVolumeDown < 0 ? 0 : newVolumeDown;
            }
            break;

          case VideoAction.VOLUME_UP:
            if (videoPlayerRef.current?.volume !== undefined) {
              let newVolumeUp = videoPlayerRef.current.volume + 0.1;
              videoPlayerRef.current.volume = newVolumeUp > 1 ? 1 : newVolumeUp;
              isMutedRef.current = false;
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
            const showVideoNow = !showVideo;

            const newOpacity = showVideoNow ? "1" : "0";
            videoPlayerRef.current.style.opacity = newOpacity;
            videoPlayerWrapperRef.current.style.opacity = newOpacity;
            setShowVideo(showVideoNow);

            break;

          case VideoAction.SIZE_SMALL:
            if (!allowSmallScreen || !smallScreenDimensions) return;
            setIsFullscreen(false);
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
            setIsFullscreen(false);
            setVideoSize("normal");

            videoPlayerWrapperRef.current.style.top = dimensions.top;
            videoPlayerWrapperRef.current.style.left = dimensions.left;
            videoPlayerWrapperRef.current.style.width = dimensions.width;
            videoPlayerWrapperRef.current.style.height = dimensions.height;
            break;

          case VideoAction.SIZE_FULLSCREEN:
            if (!allowFullScreen || !fullScreenDimensions) return;
            setIsFullscreen(true);
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

  const starterDimensions: Dimensions =
    videoSize === "small" && smallScreenDimensions
      ? smallScreenDimensions
      : videoSize === "fullscreen" && fullScreenDimensions
      ? fullScreenDimensions
      : dimensions;

  return videoUrl ? (
    <Styled.VideoPlayerWrapper
      ref={videoPlayerWrapperRef}
      bgColor={bgColor}
      top={starterDimensions.top}
      left={starterDimensions.left}
      width={starterDimensions.width}
      height={starterDimensions.height}
      border={videoBorder}
      shadow={videoShadow}
      isFullscreen={isFullscreen}
    >
      <Styled.VideoPlayer ref={videoPlayerRef} />
    </Styled.VideoPlayerWrapper>
  ) : null;
};

export default GTK_VideoComponent;
