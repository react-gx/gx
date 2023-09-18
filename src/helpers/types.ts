import { GXSignalType } from "../contexts/types.js";
import { Builder } from "../interfaces/builder.js";
import IBuilderCase from "../interfaces/builderCase.js";

/**
 * Type of the create signal option function
 */
export type CreateSignalOptionType<T> = {
  // Name of the signal
  name: string;

  // State of the signal
  state: T;

  // Actions of the signal
  actions?: Action<T>;

  // Operations of the signal
  operations?: Operation<T>;

  // Async actions of the signal
  asyncActions?: AsyncAction<T>;
};

/**
 * Type of the returned data of create store function
 */
export type CreateStoreType = {
  // Function that return the list of signals
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

export const AsyncActionStatuses = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
} as const;

export type AsyncActionStatusesType =
  (typeof AsyncActionStatuses)[keyof typeof AsyncActionStatuses];
