import { GXSignalType } from "../contexts/types";
import { CreateStoreType } from "./types";

const createStore = (signals: GXSignalType[]): CreateStoreType => {
  return {
    getSignals: () => signals,
  };
};

export default createStore;
