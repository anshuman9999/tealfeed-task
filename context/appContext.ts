import { createContext, useContext } from "react";

const initialValue: IContext = {
  matchData: [],
  setMatchData: () => {},
  winnerFrequency: {},
  theme: "dark",
  setTheme: () => {},
  loading: false,
  initialMatchData: [],
};

const AppContext = createContext<IContext>(initialValue);
export const AppProvider = AppContext.Provider;
export const useAppContext = () => useContext(AppContext);
