import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

import "./scss/styles.scss";
import { DataContext } from "./context/dataContext";
import Loader from "./overlays/loader/loader";
import OverlayTemplateParser from "./overlays/templates/overlayTemplateParser";
import socketServices from "./services/socketServices";

enum Suffix {
  Episode = "episode",
  Template = "template"
}

enum RequestType {
  Episode = "eid",
  Template = "tid",
  UserId = "uid"
}

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [state, setState] = useState<any>({});
  const [isError, setIsError] = useState<boolean>(false);
  const dataContextValue = useMemo(() => ({ ...state }), [state]);

  useEffect(() => {
    let stillHere = true;

    const fetchData = async () => {
      try {
        let urlString: string | null = null;
        let suffix: string = "";
        const queryParams = new URLSearchParams(window.location.search);
        const eid = queryParams.get(RequestType.Episode);
        const tid = queryParams.get(RequestType.Template);
        const uid = queryParams.get(RequestType.UserId);

        if (eid) {
          suffix = `${Suffix.Episode}/${uid}/${eid}`;
          urlString = `${process.env.REACT_APP_REST_SERVICE}${suffix}`;
        } else {
          suffix = `${Suffix.Template}/${uid}/${tid}`;
          urlString = `${process.env.REACT_APP_REST_SERVICE}${suffix}`;
        }

        // console.log({ urlString });

        const { data } = await axios.get(urlString);
        if (data && stillHere) {
          setIsLoaded(true);
          setState(data);
        }
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();

    return () => {
      stillHere = false;
    };
  }, []);

  React.useEffect(() => {
    let stillHere = true;

    const queryParams = new URLSearchParams(window.location.search);

    socketServices.subscribeOverlayActions(
      (err: unknown, data: { action: string; uid: string }) => {
        console.log(74, data);

        if (data?.uid !== queryParams.get(RequestType.UserId)) return;

        switch (data.action) {
          case "overlay-reset":
            console.log("reset");
            stillHere && window.location.reload();
            break;

          default:
            break;
        }
      }
    );

    return () => {
      stillHere = false;
    };
  }, []);

  if (!isLoaded && !isError) {
    return <Loader />;
  }

  if (isError) {
    return <h1>ERROR!</h1>;
  }

  return (
    <>
      <DataContext.Provider value={dataContextValue}>
        <div className="main-stage">
          {state?.templateId && <OverlayTemplateParser />}
        </div>
      </DataContext.Provider>
    </>
  );
};

export default App;

// http://localhost:3001/?tid=615de8a8b587713cb80b01af&uid=640bef8f88f7663004024d65&demo=1
