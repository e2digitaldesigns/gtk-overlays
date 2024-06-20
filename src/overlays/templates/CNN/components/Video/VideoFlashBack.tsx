import React from "react";
import useVideoPlayerDataStore from "../../../../../dataStores/useVideoPlayerDataStore/useVideoPlayerDataStore";

export const VideoFlashBackCNN: React.FC = () => {
  const { videoSize } = useVideoPlayerDataStore();

  return (
    <div
      style={{
        opacity: videoSize === "small" ? 1 : 0,
        position: "absolute",
        backgroundColor: "black",
        top: "185px",
        left: "10px",
        width: "610px",
        height: "345px",
        transition: "opacity 1s ease-in-out"
      }}
    ></div>
  );
};
