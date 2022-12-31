import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

import "./scss/styles.scss";
import { DataContext } from "./context/dataContext";
import Loader from "./overlays/loader/loader";
import OverlayTemplateParser from "./overlays/templates/overlayTemplateParser";

enum Suffix {
  Episode = "episode",
  Template = "template"
}

enum RequestType {
  Episode = "eid",
  Template = "tid"
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

        if (eid) {
          suffix = `${Suffix.Episode}/${tid}/${eid}`;
          urlString = `${process.env.REACT_APP_REST_SERVICE}${suffix}`;
        } else {
          suffix = `${Suffix.Template}/${tid}`;
          urlString = `${process.env.REACT_APP_REST_SERVICE}${suffix}`;
        }

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
