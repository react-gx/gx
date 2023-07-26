import { GXSignalType } from "../contexts/types.js";
import { CreateStoreType } from "./types.js";

const createStore = (signals: GXSignalType[]): CreateStoreType => {
  return {
    getSignals: () => signals,
  };
};

export default createStore;
