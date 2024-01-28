import { create, StoreApi } from "zustand";
import { persist } from "zustand/middleware";

export type VideoPlayerPropertyKeys =
  | "topicId"
  | "videoUrl"
  | "videoSize"
  | "videoVolume"
  | "isVideoMuted"
  | "isVideoPlaying"
  | "isVideoViewable";

export interface IVideoPlayerDataStore {
  topicId: string;
  videoUrl: string;
  videoOpacity: string;
  videoSize: "small" | "normal" | "fullscreen";
  videoVolume: number;
  isVideoMuted: boolean;
  isVideoPlaying: boolean;
  isVideoViewable: boolean;
  setVideoPlayerProperty: (
    key: VideoPlayerPropertyKeys,
    value: string | boolean
  ) => void;
}

const useVideoPlayerDataStore = create(
  persist<IVideoPlayerDataStore>(
    (
      set: StoreApi<IVideoPlayerDataStore>["setState"],
      get: StoreApi<IVideoPlayerDataStore>["getState"]
    ) => {
      return {
        topicId: "",
        videoOpacity: "0",
        videoUrl: "",
        videoSize: "normal",
        videoVolume: 0.5,
        isVideoMuted: false,
        isVideoPlaying: false,
        isVideoViewable: false,
        setVideoPlayerProperty: (key, value) => {
          set(state => ({ ...state, [key]: value }));
        }
      };
    },
    {
      name: "STORAGE_KEY.VIDEO_PLAYER"
    }
  )
);

export default useVideoPlayerDataStore;
