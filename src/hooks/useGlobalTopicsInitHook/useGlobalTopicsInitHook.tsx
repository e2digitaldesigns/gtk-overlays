import React from "react";
import socketServices from "../../services/socketServices";
import { RequestType, SocketServicesData, TopicActions } from "../../types";
import { useTopicsStore } from "../../dataStores";

const useGlobalTopicsInitHook = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const topicsDataStore = useTopicsStore();

  React.useEffect(() => {
    socketServices.subscribeOverlayActions((err: unknown, data: SocketServicesData) => {
      console.log(data);

      if (data?.uid !== queryParams.get(RequestType.UserId)) return;
      if (data?.tid && data.tid !== queryParams.get(RequestType.Template)) return;

      switch (data.action) {
        case TopicActions.TopicSet:
          topicsDataStore.topicSetter(data.data.topicId);
          break;

        case TopicActions.TopicPrevious:
          topicsDataStore.topicPrev();
          break;

        case TopicActions.TopicNext:
          topicsDataStore.topicNext();
          break;

        case TopicActions.TimerResume:
          topicsDataStore.timerResume();
          break;

        case TopicActions.TimerPause:
          topicsDataStore.timerPause();
          break;

        default:
          break;
      }
    });

    return () => {
      socketServices.unSubscribeOverlayActions();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGlobalTopicsInitHook;
