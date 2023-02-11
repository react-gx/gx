import { useReducer, useState } from "react";
import GXContext from "../contexts";
import { GXProviderProps } from "./types";
import gxReducer from "./reducer";

const GXProvider = ({ children, store }: GXProviderProps) => {
  // Global state that manage all signals
  const [signals, dispatch] = useReducer(gxReducer, store.getSignals());
  const [updateDone, setUpdateDone] = useState(false);

  // Context value
  const contextValue = {
    signals,
    dispatch,
  };

  return (
    <GXContext.Provider value={contextValue}>{children}</GXContext.Provider>
  );
};

export default GXProvider;
