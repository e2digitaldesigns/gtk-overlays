export type Dimensions = {
  top: string;
  left: string;
  width: string;
  height: string;
};

export interface IntVideoProps {
  videoBorder?: string;
  videoShadow?: boolean;

  dimensions: Dimensions;
  defaultSize?: "small" | "normal" | "fullscreen";
  bgColor?: string;

  allowSmallScreen?: boolean;
  smallScreenDimensions?: Dimensions;

  allowFullScreen?: boolean;
  fullScreenDimensions?: Dimensions;

  hideVideoOnChange?: boolean;
  transitionOnMove?: boolean;
}

export enum VideoAction {
  PLAY = "video-play",
  PAUSE = "video-pause",
  STOP = "video-stop",
  VOLUME_DOWN = "video-volume-down",
  VOLUME_UP = "video-volume-up",
  VOLUME_MUTE = "video-volume-mute",
  SEEK_FORWARD = "video-seek-forward",
  SEEK_BACKWARD = "video-seek-backward",
  VIEW_TOGGLE = "video-show-hide",
  SIZE_SMALL = "video-size-small",
  SIZE_NORMAL = "video-size-normal",
  SIZE_FULLSCREEN = "video-size-fullscreen"
}
