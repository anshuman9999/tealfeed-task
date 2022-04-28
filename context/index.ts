import { createContext, useContext } from "react";

const initialValue: IContext | null = null;

const AppContext = createContext<IContext | null>(initialValue);
export const AppProvider = AppContext.Provider;
export const useAppContext = () => useContext(AppContext);
