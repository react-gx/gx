import { GXSignalType } from "../contexts/types";
import { CreateStoreType } from "./types";

const createStore = (signals: GXSignalType[]): CreateStoreType => {
  return {
    getSignal: () => signals,
  };
};

export default createStore;
