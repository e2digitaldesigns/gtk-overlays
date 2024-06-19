import React from "react";
import { DimensionMap } from "../VideoPlayer.types";

export const useVideoActions = () => {
  const setVideoSizing = (
    wrapper: React.RefObject<HTMLDivElement>,
    key: keyof DimensionMap,
    dimensionMap: DimensionMap,
    callBack: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const videoSize = dimensionMap[key]?.videoSize;
    const dimensions = dimensionMap[key]?.dimensions;
    if (!dimensions || !videoSize || !wrapper.current) return;

    wrapper.current.style.top = dimensions.top;
    wrapper.current.style.left = dimensions.left;
    wrapper.current.style.width = dimensions.width;
    wrapper.current.style.height = dimensions.height;

    callBack(videoSize);
  };

  const volumeDecrease = (vidPlayerRef: React.RefObject<HTMLVideoElement>) => {
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
  };

  const volumeIncrease = (
    vidPlayerRef: React.RefObject<HTMLVideoElement>,
    targetVolume: number
  ) => {
    if (!vidPlayerRef.current) return;

    let currentVolume = vidPlayerRef.current.volume;
    const increment = 0.1;
    const delay = 100;

    function increaseVolume() {
      if (currentVolume < targetVolume) {
        currentVolume += increment;

        if (vidPlayerRef.current)
          vidPlayerRef.current.volume = currentVolume > 1 ? 1 : currentVolume;
        setTimeout(increaseVolume, delay);
      }
    }

    increaseVolume();
  };

  return {
    setVideoSizing,
    volumeDecrease,
    volumeIncrease
  };
};
