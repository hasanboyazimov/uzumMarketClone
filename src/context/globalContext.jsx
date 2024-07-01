import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
  return (
    <GlobalContext.Provider value={[1, 2, 3]}>
      {children}
    </GlobalContext.Provider>
  );
};
