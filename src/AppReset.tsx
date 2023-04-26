import React from "react";
import socketServices from "./services/socketServices";

export const ApplicationSocket: React.FC = () => {
  const queryParams = new URLSearchParams(window.location.search);

  React.useEffect(() => {
    let stillHere = true;

    socketServices.subscribeApplicationActions(
      (err: unknown, data: { action: string; uid: string; tid?: string }) => {
        if (data?.uid !== queryParams.get("uid")) return;
        if (data?.tid && data.tid !== queryParams.get("tid")) return;

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
  }, []);

  return null;
};
