import React from "react";
import { RequestType } from "../../types";

type IsValid<T> = (data: T) => boolean;

type ParamCheck<T> = {
  isValid: IsValid<T>;
};

export const useParamCheck = <T>(): ParamCheck<T> => {
  const queryParams = React.useMemo(() => {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams;
  }, []);

  const isValid: IsValid<T> = (data: T) => {
    const { uid, tid } = data as unknown as { uid: string; tid?: string };

    if (uid !== queryParams.get(RequestType.UserId)) return false;
    if (tid && tid !== queryParams.get(RequestType.Template)) return false;

    return true;
  };

  return {
    isValid
  };
};
