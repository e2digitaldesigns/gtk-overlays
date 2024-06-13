export type Dimensions = {
  top: string;
  left: string;
  width: string;
  height: string;
};

export enum VideoSize {
  SMALL = "small",
  NORMAL = "normal",
  FULLSCREEN = "fullscreen",
  CUSTOM_1 = "custom1",
  CUSTOM_2 = "custom2",
  CUSTOM_3 = "custom3"
}

export interface IntVideoProps {
  videoBorder?: string;
  videoShadow?: boolean;

  defaultSize?: VideoSize;
  bgColor?: string;

  dimensions: Dimensions;
  smallScreenDimensions?: Dimensions;
  fullScreenDimensions?: Dimensions;
  customDimensions1?: Dimensions;
  customDimensions2?: Dimensions;
  customDimensions3?: Dimensions;

  transitionOnMove?: boolean;

  showVideoOnLoad?: boolean;
  playOnLoad?: boolean;
  zIndex?: number;
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
  SIZE_FULLSCREEN = "video-size-fullscreen",
  SIZE_CUSTOM_1 = "video-size-custom-1",
  SIZE_CUSTOM_2 = "video-size-custom-2",
  SIZE_CUSTOM_3 = "video-size-custom-3"
}

export type DimensionMapEntry = {
  videoSize: VideoSize;
  dimensions: Dimensions | undefined;
};

export type DimensionMap = Partial<Record<VideoAction, DimensionMapEntry>>;
