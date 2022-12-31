import { IntTopic } from "../types";

export const imageParser = (
  imageShow: boolean,
  imageBaseUrl?: string,
  imageDefault?: string,
  currentTopicState?: IntTopic
) => {
  if (!imageShow || !imageBaseUrl || !imageDefault) return "";

  const defaultImage = `${imageBaseUrl}${imageDefault}`;

  return currentTopicState?.img
    ? `${imageBaseUrl}${currentTopicState.img}`
    : defaultImage;
};
