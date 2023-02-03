import { useReducer } from "react";
import GXContext from "../contexts";
import { GXProviderProps } from "./types";
import gxReducer from "./reducer";

const GXProvider = ({ children, store }: GXProviderProps) => {
  // Global state that manage all signals
  const [signals, dispatch] = useReducer(gxReducer, store.getSignal());

  // Context value
  const contextValue = {
    signals
  };

  return (
    <GXContext.Provider value={contextValue}>{children}</GXContext.Provider>
  );
};

export default GXProvider;
