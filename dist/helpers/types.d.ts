import { type GXSignalType } from '../contexts/types.js';
import { type Builder } from '../interfaces/builder.js';
import type IBuilderCase from '../interfaces/builderCase.js';
/**
 * Type of the create signal option function
 */
export interface CreateSignalOptionType<T> {
    name: string;
    state: T;
    actions?: Action<T>;
    operations?: Operation<T>;
    asyncActions?: AsyncAction<T>;
}
/**
 * Type of the returned data of create store function
 */
export interface CreateStoreType {
    getSignals: () => GXSignalType[];
}
/**
 * Type of Action
 */
export type Action<T> = Record<string, (state: T, payload: any) => T>;
/**
 * Type of Operation
 */
export type Operation<T> = Record<string, (state: T, payload?: any) => any>;
/**
 * Type of Async Action
 */
export type AsyncAction<T> = (builder: Builder<T>) => Record<string, IBuilderCase<T>>;
export type CreateAsyncActionProp = (payload?: any) => Promise<any>;
export interface CreateAsyncActionReturnType {
    pending: AsyncActionStatusesType;
    fulfilled: AsyncActionStatusesType;
    rejected: AsyncActionStatusesType;
    handler: CreateAsyncActionProp;
}
export declare const AsyncActionStatuses: {
    readonly PENDING: "PENDING";
    readonly FULFILLED: "FULFILLED";
    readonly REJECTED: "REJECTED";
};
export type AsyncActionStatusesType = (typeof AsyncActionStatuses)[keyof typeof AsyncActionStatuses];
