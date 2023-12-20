import { STORAGE_KEY } from "../../types";

export const setStorageData = (currentTopicId: string) => {
  window.localStorage.setItem(
    STORAGE_KEY.CURRENT_TOPIC,
    JSON.stringify(currentTopicId)
  );
};
