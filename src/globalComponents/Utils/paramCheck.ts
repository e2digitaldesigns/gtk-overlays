import React from "react";
import { ChatVoteData, RequestType } from "../../types";

type Data = ChatVoteData;

type IsValid = (data: Data) => boolean;

type ParamCheck = () => {
  isValid: IsValid;
};

export const useParamCheck: ParamCheck = () => {
  const queryParams = React.useMemo(() => {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams;
  }, []);

  const isValid: IsValid = data => {
    if (data?.uid !== queryParams.get(RequestType.UserId)) return false;
    if (data?.tid && data.tid !== queryParams.get(RequestType.Template)) return false;

    return true;
  };

  return {
    isValid
  };
};
