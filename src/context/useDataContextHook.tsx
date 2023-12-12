import React from "react";
import { DataContext } from "./dataContext";

const useDataContext = () => {
  const data = React.useContext(DataContext);
  return data;
};

export default useDataContext;
