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

  allowSmallScreen?: boolean;
  smallScreenDimensions?: Dimensions;

  allowFullScreen?: boolean;
  fullScreenDimensions?: Dimensions;

  callBack?: (isVideoVisible: boolean) => void;
}

const GTK_VideoComponent: React.FC<IntVideoProps> = ({
  dimensions,
  allowSmallScreen = false,
  smallScreenDimensions = undefined,
  allowFullScreen = false,
  fullScreenDimensions = undefined,
  topicId,
  videoUrl,
  videoBorder = "none",
  videoShadow = false,
  callBack = undefined
}) => {
  const queryParams = new URLSearchParams(window.location.search);
  const videoPlayerRef = React.useRef<HTMLVideoElement>(null);
  const isMutedRef = React.useRef(false);
  const mutedVolumeRef = React.useRef(0);
  const showVideoRef = React.useRef(true);

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
        if (!videoPlayerRef?.current) return;

        switch (data.action) {
          case "video-play":
            callBack && callBack(true);
            videoPlayerRef.current.style.opacity = "1";
            videoPlayerRef.current?.play();
            break;

          case "video-pause":
            videoPlayerRef.current?.pause();
            break;

          case "video-stop":
            callBack && callBack(false);
            videoPlayerRef.current?.pause();
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

            videoPlayerRef.current.style.opacity = showVideoRef.current
              ? "1"
              : "0";

            callBack && callBack(showVideoRef.current);
            break;

          case "video-size-small":
            if (!allowSmallScreen || !smallScreenDimensions) return;
            videoPlayerRef.current.style.top = smallScreenDimensions.top;
            videoPlayerRef.current.style.left = smallScreenDimensions.left;
            videoPlayerRef.current.style.width = smallScreenDimensions.width;
            videoPlayerRef.current.style.height = smallScreenDimensions.height;
            break;

          case "video-size-normal":
            videoPlayerRef.current.style.top = dimensions.top;
            videoPlayerRef.current.style.left = dimensions.left;
            videoPlayerRef.current.style.width = dimensions.width;
            videoPlayerRef.current.style.height = dimensions.height;
            break;

          case "video-size-fullscreen":
            if (!allowFullScreen || !fullScreenDimensions) return;
            videoPlayerRef.current.style.top = fullScreenDimensions.top;
            videoPlayerRef.current.style.left = fullScreenDimensions.left;
            videoPlayerRef.current.style.width = fullScreenDimensions.width;
            videoPlayerRef.current.style.height = fullScreenDimensions.height;
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
    <Styled.VideoPlayer
      ref={videoPlayerRef}
      top={dimensions.top}
      left={dimensions.left}
      width={dimensions.width}
      height={dimensions.height}
      border={videoBorder}
      shadow={videoShadow}
    />
  ) : null;
};

export default GTK_VideoComponent;
