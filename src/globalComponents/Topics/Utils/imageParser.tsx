import React from "react";
import { IntTopic } from "../../../types";

interface IntTopicImageProps {
  imageShow: boolean;
  imageBaseUrl?: string;
  imageDefault?: string;
  currentTopicState?: IntTopic;
}

const TopicImage: React.FC<IntTopicImageProps> = ({
  imageShow,
  imageBaseUrl,
  imageDefault,
  currentTopicState
}) => {
  const baseUrl = imageBaseUrl || "";
  const defaultImage = imageDefault && `${baseUrl}${imageDefault}`;
  const topicImage =
    currentTopicState?.img && `${baseUrl}${currentTopicState.img}`;

  const image = topicImage || defaultImage;

  if (!image || !imageShow) return null;

  return <img src={image} alt={currentTopicState?.name} />;
};

export default TopicImage;
