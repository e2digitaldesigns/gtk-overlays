import { createContext } from "react";
import { GlobalDataContextState } from "../types";

export const DataContext = createContext<GlobalDataContextState>(
  {} as GlobalDataContextState
);
