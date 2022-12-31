import { createContext } from "react";

export const DataContext = createContext<any>({
  state: {},
  setState: (): void => {},
});
