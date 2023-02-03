import { useReducer } from "react";
import GXContext from "../contexts/gxContext";
import { GXAction, GXProviderProps } from "./types";
import gxReducer from "./reducer";
import { GXSignalType } from "../contexts/types";

const GXProvider = ({ children, store }: GXProviderProps) => {
  // Global state that manage all signals
  const [signals, dispatch] = useReducer(gxReducer, store);

  // Context value
  const contextValue = {
    signals
  };

  return (
    <GXContext.Provider value={contextValue}>{children}</GXContext.Provider>
  );
};

export default GXProvider;
