/// <reference types="react" />
import IBuilderCase from "../interfaces/builderCase.js";
import { GXAction } from "../providers/types.js";
/**
 * Type that represents a signal
 */
export type GXSignalType<T = any> = {
    name: string;
    state: T;
    actions?: GXActionType<T>[];
    operations?: GXOperationType<T>[];
    asyncActions?: GXAsyncActionType<T>[];
};
/**
 * Type that represents Actions
 */
export type GXActionType<T, P = any> = {
    type: string;
    handler: (state: T, payload: P) => T;
};
/**
 * Type that represents operations
 */
export type GXOperationType<T, P = any, Q = any> = {
    type: string;
    handler: (state: T, payload: P) => Q;
};
/**
 * Type that represents async actions
 */
export type GXAsyncActionType<T, P = any> = {
    type: string;
    steps: IBuilderCase<T, P>;
};
/**
 * Type of dispatched action
 */
export type DispatchedActionType = {
    type: string;
    payload: any;
};
/**
 * Type of the signals context
 */
export type GXContextType = {
    signals: GXSignalType[];
    dispatch: React.Dispatch<GXAction>;
    asyncDispatch: (action: GXAction) => any;
};
