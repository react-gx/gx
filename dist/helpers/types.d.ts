import { GXSignalType } from "../contexts/types.js";
export type CreateSignalOptionType<T> = {
    name: string;
    state: T;
    actions: Action<T>;
    operations?: Operation<T>;
};
export type CreateStoreType = {
    getSignals: () => GXSignalType[];
};
export type Action<T> = {
    [key: string]: (state: T, payload: any) => T;
};
export type Operation<T> = {
    [key: string]: (state: T, payload?: any) => any;
};
