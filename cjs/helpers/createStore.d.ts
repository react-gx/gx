import { GXSignalType } from "../contexts/types";
import { CreateStoreType } from "./types";
declare const createStore: (signals: GXSignalType[]) => CreateStoreType;
export default createStore;
