/// <reference types="react" />
import { GXAction } from "../providers/types";
export type GXSignalType<T = any> = {
    name: string;
    state: T;
    actions: GXActionType<T>[];
};
export type GXActionType<T, P = any> = {
    type: string;
    handler: (state: T, payload: P) => T;
};
export type DispatchedActionType = {
    type: string;
    payload: any;
};
export type GXContextType = {
    signals: GXSignalType[];
    dispatch: React.Dispatch<GXAction>;
};
