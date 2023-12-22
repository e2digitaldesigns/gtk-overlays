import { create, StoreApi } from "zustand";
import { IntTopic } from "../../globalComponents/TopicChild/types";
import { setStorageData } from "./setStorageData";
import useVotingDataStore from "../useVotingDataStore/useVotingDataStore";
import { RequestType } from "../../types";
import axios from "axios";

export interface ITopicsDataStore {
  currentTopic: IntTopic;
  currentTopicId: string;
  currentTopicIndex: number;
  isTimerPaused: boolean;
  topics: IntTopic[];

  hydrate: (data: IntTopic[]) => void;

  topicNext: () => void;
  topicPrev: () => void;
  timerResume: () => void;
  timerPause: () => void;
  logTopic: (chat: string) => void;
}

const useTopicsDataStore = create<ITopicsDataStore>(
  (
    set: StoreApi<ITopicsDataStore>["setState"],
    get: StoreApi<ITopicsDataStore>["getState"]
  ) => {
    return {
      currentTopic: {} as IntTopic,
      currentTopicId: "",
      currentTopicIndex: 0,
      isTimerPaused: true,
      topics: [],

      hydrate: (data: IntTopic[]) => {
        set({
          currentTopic: data[0] || ({} as IntTopic),
          currentTopicId: data[0]?._id || "",
          currentTopicIndex: 0,
          isTimerPaused: true,
          topics: data
        });

        setStorageData(data[0]?._id);
        useVotingDataStore.getState().setTopicId(data[0]?._id);
      },

      topicNext: () => {
        const { currentTopicIndex, topics } = get();

        if (currentTopicIndex < topics.length - 1) {
          const nextIndex = currentTopicIndex + 1;
          set({
            currentTopic: topics[nextIndex],
            currentTopicId: topics[nextIndex]._id,
            currentTopicIndex: nextIndex,
            isTimerPaused: true
          });

          const theTopic = topics[nextIndex];
          setStorageData(theTopic._id);
          useVotingDataStore.getState().setTopicId(theTopic._id);
          get().logTopic(theTopic.chat);
        }
      },

      topicPrev: () => {
        const { currentTopicIndex, topics } = get();

        if (currentTopicIndex > 0) {
          const prevIndex = currentTopicIndex - 1;
          set({
            currentTopic: topics[prevIndex],
            currentTopicId: topics[prevIndex]._id,
            currentTopicIndex: prevIndex,
            isTimerPaused: true
          });

          const theTopic = topics[prevIndex];
          setStorageData(theTopic._id);
          useVotingDataStore.getState().setTopicId(theTopic._id);
          get().logTopic(theTopic.chat);
        }
      },

      timerResume: () => {
        set({ isTimerPaused: false });
      },

      timerPause: () => {
        set({ isTimerPaused: true });
      },

      logTopic: async (chat: string) => {
        const queryParams = new URLSearchParams(window.location.search);
        const userId = queryParams.get(RequestType.UserId);
        const templateId = queryParams.get(RequestType.Template);

        if (!userId || !templateId) return;

        try {
          await axios.post(`${process.env.REACT_APP_REST_SERVICE}topicLog`, {
            chat: chat || "",
            templateId,
            userId
          });
        } catch (error) {
          console.error(error);
        }
      }
    };
  }
);

export default useTopicsDataStore;
