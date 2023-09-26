/// <reference types="react" />
import type IBuilderCase from '../interfaces/builderCase.js';
import { type GXAction } from '../providers/types.js';
/**
 * Type that represents a signal
 */
export interface GXSignalType<T = any> {
    name: string;
    state: T;
    actions?: Array<GXActionType<T>>;
    operations?: Array<GXOperationType<T>>;
    asyncActions?: Array<GXAsyncActionType<T>>;
}
/**
 * Type that represents Actions
 */
export interface GXActionType<T, P = any> {
    type: string;
    handler: (state: T, payload: P) => T;
}
/**
 * Type that represents operations
 */
export interface GXOperationType<T, P = any, Q = any> {
    type: string;
    handler: (state: T, payload: P) => Q;
}
/**
 * Type that represents async actions
 */
export interface GXAsyncActionType<T, P = any> {
    type: string;
    steps: IBuilderCase<T, P>;
}
/**
 * Type of dispatched action
 */
export interface DispatchedActionType {
    type: string;
    payload: any;
}
/**
 * Type of the signals context
 */
export interface GXContextType {
    signals: GXSignalType[];
    dispatch: React.Dispatch<GXAction>;
    asyncDispatch: (action: GXAction) => any;
}
