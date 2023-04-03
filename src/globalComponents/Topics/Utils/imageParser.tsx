import React from "react";
import { IntTopic } from "../types";

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
  const defaultImage = imageDefault && `${imageBaseUrl}${imageDefault}`;
  const topicImage =
    currentTopicState?.img && `${imageBaseUrl}${currentTopicState.img}`;

  const image = topicImage || defaultImage;

  if (!image || !imageShow) return null;

  return <img src={image} alt={currentTopicState?.name} />;
};

export default TopicImage;
