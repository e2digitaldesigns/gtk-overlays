import React from "react";
import socketServices from "./services/socketServices";
import { RequestType, SocketServicesData } from "./types";

export const ApplicationSocket: React.FC = () => {
  const queryParams = new URLSearchParams(window.location.search);

  React.useEffect(() => {
    let stillHere = true;

    socketServices.subscribeApplicationActions(
      (err: unknown, data: SocketServicesData) => {
        if (data?.uid !== queryParams.get(RequestType.UserId)) return;
        if (data?.tid && data.tid !== queryParams.get(RequestType.Template))
          return;

        switch (data.action) {
          case "overlay-reset":
            stillHere && window.location.reload();
            break;

          default:
            break;
        }
      }
    );

    return () => {
      stillHere = false;
      socketServices.unSubscribeApplicationActions();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
