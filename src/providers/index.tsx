import { useReducer } from "react";
import GXContext from "../contexts/index.js";
import { GXProviderProps } from "./types.js";
import gxReducer from "./reducer.js";

export default function GXProvider({ children, store }: GXProviderProps) {
  // Global state that manage all signals
  const [signals, dispatch] = useReducer(gxReducer, store.getSignals());

  // Context value
  const contextValue = {
    signals,
    dispatch,
  };

  return (
    <GXContext.Provider value={contextValue}>{children}</GXContext.Provider>
  );
};
