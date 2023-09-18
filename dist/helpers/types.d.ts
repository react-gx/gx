import { GXSignalType } from "../contexts/types.js";
import { Builder } from "../interfaces/builder.js";
import IBuilderCase from "../interfaces/builderCase.js";
/**
 * Type of the create signal option function
 */
export type CreateSignalOptionType<T> = {
    name: string;
    state: T;
    actions?: Action<T>;
    operations?: Operation<T>;
    asyncActions?: AsyncAction<T>;
};
/**
 * Type of the returned data of create store function
 */
export type CreateStoreType = {
    getSignals: () => GXSignalType[];
};
/**
 * Type of Action
 */
export type Action<T> = {
    [key: string]: (state: T, payload: any) => T;
};
/**
 * Type of Operation
 */
export type Operation<T> = {
    [key: string]: (state: T, payload?: any) => any;
};
/**
 * Type of Async Action
 */
export type AsyncAction<T> = (builder: Builder<T>) => {
    [key: string]: IBuilderCase<T>;
};
export type CreateAsyncActionProp = (payload?: any) => Promise<any>;
export type CreateAsyncActionReturnType = {
    pending: AsyncActionStatusesType;
    fulfilled: AsyncActionStatusesType;
    rejected: AsyncActionStatusesType;
    handler: CreateAsyncActionProp;
};
export declare const AsyncActionStatuses: {
    readonly PENDING: "PENDING";
    readonly FULFILLED: "FULFILLED";
    readonly REJECTED: "REJECTED";
};
export type AsyncActionStatusesType = (typeof AsyncActionStatuses)[keyof typeof AsyncActionStatuses];
