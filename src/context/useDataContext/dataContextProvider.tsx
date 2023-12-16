import React from "react";
import axios from "axios";

import { DataContext } from "./dataContext";
import { GlobalDataContext, RequestType } from "../../types";

import Loader from "../../overlays/loader/loader";
import useTopicsDataStore from "../../dataStores/useTopicsDataStore";

enum Suffix {
  Episode = "episode",
  Template = "template"
}

interface IDataContextProvider {
  children: React.ReactNode;
}

export const DataContextProvider: React.FC<IDataContextProvider> = ({
  children
}) => {
  const [state, setState] = React.useState<GlobalDataContext | null>(null);
  const [isError, setIsError] = React.useState(false);
  const dataContextValue = React.useMemo(() => state, [state]);
  const useTopicsData = useTopicsDataStore(state => state);

  React.useEffect(() => {
    let stillHere = true;

    const fetchData = async () => {
      try {
        const queryParams = new URLSearchParams(window.location.search);
        const eid = queryParams.get(RequestType.Episode);
        const tid = queryParams.get(RequestType.Template);
        const uid = queryParams.get(RequestType.UserId);

        const suffix: string = eid
          ? `${Suffix.Episode}/${uid}/${eid}`
          : `${Suffix.Template}/${uid}/${tid}`;

        const urlString = `${process.env.REACT_APP_REST_SERVICE}shows/${suffix}`;

        const { data } = await axios.get(urlString);
        if (data && stillHere) {
          setState(data);
          useTopicsData.hydrate(data.topics);
        }
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();

    return () => {
      stillHere = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isError) {
    return (
      <div>
        <h2>Something went wrong...</h2>
      </div>
    );
  }

  return dataContextValue ? (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  ) : (
    <Loader bgColor="#222" />
  );
};
