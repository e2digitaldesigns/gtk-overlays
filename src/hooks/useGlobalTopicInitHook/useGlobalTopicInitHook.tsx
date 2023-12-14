import React from "react";
import socketServices from "../../services/socketServices";
import { RequestType, SocketServicesData, TopicActions } from "../../types";

const useGlobalTopicInitHook = () => {
  const queryParams = new URLSearchParams(window.location.search);

  React.useEffect(() => {
    socketServices.subscribeOverlayActions(
      (err: unknown, data: SocketServicesData) => {
        if (data?.uid !== queryParams.get(RequestType.UserId)) return;
        if (data?.tid && data.tid !== queryParams.get(RequestType.Template))
          return;

        switch (data.action) {
          case TopicActions.TopicPrevious:
            break;

          case TopicActions.TopicNext:
            break;

          case TopicActions.TimerResume:
            break;

          case TopicActions.TimerPause:
            break;

          default:
            break;
        }
      }
    );

    return () => {
      socketServices.unSubscribeHostVoting();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGlobalTopicInitHook;
