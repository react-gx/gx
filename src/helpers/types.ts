import { GXSignalType } from "../contexts/types";

export type CreateSignalOptionType = {
  id: string;
  state: any;
  actions: Object
}

export type CreateStoreType = {
  getSignal: () => GXSignalType[]
}