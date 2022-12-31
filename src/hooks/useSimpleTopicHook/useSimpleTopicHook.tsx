import React from "react";
import socketServices from "../../services/socketServices";
import { TopicActions } from "../../types";

const useSimpleTopicHook = (data: any) => {
  const [topics, setTopics] = React.useState(data);
  const [currentTopicIndex, setCurrentTopicIndex] = React.useState(0);

  React.useEffect(() => {
    let stillHere = true;

    const prevTopic = () => {
      const index = currentTopicIndex > 0 ? currentTopicIndex - 1 : 0;
      setCurrentTopicIndex(index);
    };

    const nextTopic = () => {
      const index =
        currentTopicIndex >= topics.length - 1
          ? topics.length - 1
          : currentTopicIndex + 1;
      setCurrentTopicIndex(index);
    };

    socketServices.subscribeOverlayActions((err: any, data: any) => {
      console.log(23, data);
      switch (data.action) {
        case TopicActions.TopicPrevious:
          stillHere && prevTopic();
          break;

        case TopicActions.TopicNext:
          stillHere && nextTopic();
          break;

        default:
          break;
      }
    });

    return () => {
      stillHere = false;
      socketServices.unSubscribeOverlayActions();
    };
  }, []);

  return topics?.[currentTopicIndex];
};

export default useSimpleTopicHook;
