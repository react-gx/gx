/// <reference types="react" />
import { GXAction } from "../providers/types.js";
export type GXSignalType<T = any> = {
    name: string;
    state: T;
    actions: GXActionType<T>[];
    operations?: GXOperationType<T>[];
};
export type GXActionType<T, P = any> = {
    type: string;
    handler: (state: T, payload: P) => T;
};
export type GXOperationType<T, P = any, Q = any> = {
    type: string;
    handler: (state: T, payload: P) => Q;
};
export type DispatchedActionType = {
    type: string;
    payload: any;
};
export type GXContextType = {
    signals: GXSignalType[];
    dispatch: React.Dispatch<GXAction>;
};
