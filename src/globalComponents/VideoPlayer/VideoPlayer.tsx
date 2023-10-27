import React from "react";
import * as Styled from "./VideoPlayer.styles";
import socketServices from "../../services/socketServices";

type Dimensions = {
  top: string;
  left: string;
  width: string;
  height: string;
};

interface IntVideoProps {
  topicId: string | undefined;
  videoBorder?: string;
  videoShadow?: boolean;
  videoUrl: string | undefined;
  dimensions: Dimensions;
  bgColor?: string;

  allowSmallScreen?: boolean;
  smallScreenDimensions?: Dimensions;

  allowFullScreen?: boolean;
  fullScreenDimensions?: Dimensions;

  callBack?: (isVideoVisible: boolean) => void;
}

const GTK_VideoComponent: React.FC<IntVideoProps> = ({
  dimensions,
  bgColor = "black",
  allowSmallScreen = false,
  smallScreenDimensions,
  allowFullScreen = false,
  fullScreenDimensions,
  topicId,
  videoUrl,
  videoBorder = "none",
  videoShadow = false,
  callBack
}) => {
  const queryParams = new URLSearchParams(window.location.search);
  const videoPlayerWrapperRef = React.useRef<HTMLDivElement>(null);
  const videoPlayerRef = React.useRef<HTMLVideoElement>(null);
  const isMutedRef = React.useRef(false);
  const mutedVolumeRef = React.useRef(0);
  const showVideoRef = React.useRef(true);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  React.useEffect(() => {
    callBack && callBack(false);
    if (!videoPlayerRef.current || !videoPlayerWrapperRef.current) return;
    videoPlayerRef.current?.pause();
    videoPlayerWrapperRef.current.style.opacity = "0";
    videoPlayerRef.current.style.opacity = "0";
    videoPlayerRef.current.currentTime = 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicId]);

  React.useEffect(
    () => {
      if (videoPlayerRef.current && videoUrl) {
        videoPlayerRef.current.src = videoUrl;
        videoPlayerRef.current.load();
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topicId, videoUrl]
  );

  function increaseVolumeWithDelay(
    vidPlayerRef: React.RefObject<HTMLVideoElement>,
    targetVolume: number
  ) {
    if (!vidPlayerRef.current) return;

    let currentVolume = vidPlayerRef.current.volume;
    const increment = 0.1;
    const delay = 100;

    function increaseVolume() {
      if (currentVolume < targetVolume) {
        currentVolume += increment;
        if (vidPlayerRef.current) vidPlayerRef.current.volume = currentVolume;
        setTimeout(increaseVolume, delay);
      }
    }

    increaseVolume();
  }

  function decreaseVolumeWithDelay(
    vidPlayerRef: React.RefObject<HTMLVideoElement>
  ) {
    if (!vidPlayerRef.current) return;
    let currentVolume = vidPlayerRef.current.volume;
    const targetVolume = 0;
    const decrement = 0.1;
    const delay = 50;

    function decreaseVolume() {
      if (currentVolume > targetVolume) {
        currentVolume -= decrement;
        if (currentVolume < 0) {
          currentVolume = 0;
        }
        if (vidPlayerRef.current) {
          vidPlayerRef.current.volume = currentVolume > 0 ? currentVolume : 0;
        }
        setTimeout(decreaseVolume, delay);
      }
    }

    decreaseVolume();
  }

  React.useEffect(() => {
    socketServices.subscribeOverlaysVideoPlayer(
      (err: unknown, data: { action: string; uid: string; tid?: string }) => {
        if (data?.uid !== queryParams.get("uid")) return;
        if (data?.tid && data.tid !== queryParams.get("tid")) return;
        if (!videoPlayerRef?.current || !videoPlayerWrapperRef.current) return;

        switch (data.action) {
          case "video-play":
            callBack && callBack(true);
            videoPlayerWrapperRef.current.style.opacity = "1";
            videoPlayerRef.current.style.opacity = "1";
            videoPlayerRef.current?.play();
            break;

          case "video-pause":
            videoPlayerRef.current?.pause();
            break;

          case "video-stop":
            callBack && callBack(false);
            videoPlayerRef.current?.pause();
            videoPlayerWrapperRef.current.style.opacity = "0";
            videoPlayerRef.current.style.opacity = "0";
            videoPlayerRef.current.currentTime = 0;
            break;

          case "video-volume-down":
            if (videoPlayerRef.current?.volume !== undefined) {
              let newVolumeDown = videoPlayerRef.current.volume - 0.1;
              isMutedRef.current = false;
              videoPlayerRef.current.volume =
                newVolumeDown < 0 ? 0 : newVolumeDown;
            }
            break;

          case "video-volume-up":
            if (videoPlayerRef.current?.volume !== undefined) {
              let newVolumeUp = videoPlayerRef.current.volume + 0.1;
              videoPlayerRef.current.volume = newVolumeUp > 1 ? 1 : newVolumeUp;
              isMutedRef.current = false;
            }
            break;

          case "video-volume-mute":
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

          case "video-seek-forward":
            if (videoPlayerRef.current?.currentTime !== undefined) {
              videoPlayerRef.current.currentTime += 10;
            }
            break;

          case "video-seek-backward":
            if (videoPlayerRef.current?.currentTime !== undefined) {
              videoPlayerRef.current.currentTime -= 10;
            }
            break;

          case "video-show-hide":
            showVideoRef.current = !showVideoRef.current;
            const newOpacity = showVideoRef.current ? "1" : "0";
            videoPlayerRef.current.style.opacity = newOpacity;
            videoPlayerWrapperRef.current.style.opacity = newOpacity;

            callBack && callBack(showVideoRef.current);
            break;

          case "video-size-small":
            if (!allowSmallScreen || !smallScreenDimensions) return;
            setIsFullscreen(false);
            videoPlayerWrapperRef.current.style.top = smallScreenDimensions.top;
            videoPlayerWrapperRef.current.style.left =
              smallScreenDimensions.left;
            videoPlayerWrapperRef.current.style.width =
              smallScreenDimensions.width;
            videoPlayerWrapperRef.current.style.height =
              smallScreenDimensions.height;
            break;

          case "video-size-normal":
            setIsFullscreen(false);
            videoPlayerWrapperRef.current.style.top = dimensions.top;
            videoPlayerWrapperRef.current.style.left = dimensions.left;
            videoPlayerWrapperRef.current.style.width = dimensions.width;
            videoPlayerWrapperRef.current.style.height = dimensions.height;
            break;

          case "video-size-fullscreen":
            setIsFullscreen(true);
            if (!allowFullScreen || !fullScreenDimensions) return;
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

  return videoUrl ? (
    <Styled.VideoPlayerWrapper
      ref={videoPlayerWrapperRef}
      bgColor={bgColor}
      top={dimensions.top}
      left={dimensions.left}
      width={dimensions.width}
      height={dimensions.height}
      border={videoBorder}
      shadow={videoShadow}
      isFullscreen={isFullscreen}
    >
      <Styled.VideoPlayer ref={videoPlayerRef} />
    </Styled.VideoPlayerWrapper>
  ) : null;
};

export default GTK_VideoComponent;
