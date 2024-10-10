import { useMemo } from "react";

const useGetQueryParamsHook = () => {
  const queryParams = useMemo(() => {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams;
  }, []);

  const socketParamChecker = (userId: string, templateId: string | undefined = undefined) => {
    if (queryParams.get("uid") !== userId) return false;
    if (templateId && templateId !== queryParams.get("tid")) return false;
    return true;
  };

  return {
    userId: queryParams.get("uid"),
    templateId: queryParams.get("tid"),
    queryParams,
    socketParamChecker
  };
};

export default useGetQueryParamsHook;
