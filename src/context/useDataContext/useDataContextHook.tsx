import React from "react";
import { DataContext } from "./dataContext";

const useDataContextHook = () => {
  const data = React.useContext(DataContext);
  return data;
};

export default useDataContextHook;
