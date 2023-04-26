import React from "react";
import { IntTopic } from "../../globalComponents/Topics/types";
import socketServices from "../../services/socketServices";
import { TopicActions } from "../../types";

const useSimpleTopicHook = (data: IntTopic[], loop: boolean = false) => {
  const queryParams = new URLSearchParams(window.location.search);
  const [topics, setTopics] = React.useState<IntTopic[]>(data);
  const [currentTopicIndex, setCurrentTopicIndex] = React.useState<number>(0);

  React.useEffect(() => {
    let stillHere = true;

    const prevTopic = () => {
      const index = currentTopicIndex > 0 ? currentTopicIndex - 1 : 0;
      setCurrentTopicIndex(index);
    };

    const nextTopic = () => {
      const atLimit = loop ? 0 : topics.length - 1;
      const index =
        currentTopicIndex >= topics.length - 1
          ? atLimit
          : currentTopicIndex + 1;

      setCurrentTopicIndex(index);
    };

    socketServices.subscribeOverlayActions((err: any, data: any) => {
      if (data?.uid !== queryParams.get("uid")) return;
      if (data?.tid && data.tid !== queryParams.get("tid")) return;

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
  }, [currentTopicIndex]);

  return { topic: topics?.[currentTopicIndex], index: currentTopicIndex };
};

export default useSimpleTopicHook;
