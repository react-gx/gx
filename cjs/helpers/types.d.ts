import { GXSignalType } from "../contexts/types";
export type CreateSignalOptionType<T> = {
    name: string;
    state: T;
    actions: Action<T>;
};
export type CreateStoreType = {
    getSignals: () => GXSignalType[];
};
export type Action<T> = {
    [key: string]: (state: T, payload: any) => T;
};
