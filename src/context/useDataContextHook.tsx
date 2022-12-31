import React from "react";
import { DataContext } from "./dataContext";

const useDataContext = () => {
  const data: any = React.useContext(DataContext);
  return data;
};

export default useDataContext;
