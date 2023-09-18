import { GXSignalType } from "../contexts/types.js";
import { CreateStoreType } from "./types.js";

/**
 * Function that create a store by collection a list of signals
 * @param signals List of signals
 * @returns
 */
const createStore = (signals: GXSignalType[]): CreateStoreType => {
  return {
    getSignals: () => signals,
  };
};

export default createStore;
