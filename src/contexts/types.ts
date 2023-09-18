import IBuilderCase, { BuilderCase } from "../interfaces/builderCase.js";
import { GXAction } from "../providers/types.js";

/**
 * Type that represents a signal
 */
export type GXSignalType<T = any> = {
  // Name of the signal
  name: string;

  // State inside the signal
  state: T;

  // Actions of the signal
  actions?: GXActionType<T>[];

  // Operations of the signal
  operations?: GXOperationType<T>[];

  // Async actions of the signal
  asyncActions?: GXAsyncActionType<T>[];
};

/**
 * Type that represents Actions
 */
export type GXActionType<T, P = any> = {
  // Represent the type of the action
  type: string;

  // The handler function
  handler: (state: T, payload: P) => T;
};

/**
 * Type that represents operations
 */
export type GXOperationType<T, P = any, Q = any> = {
  // Represent the type of the operation
  type: string;

  // The handle function
  handler: (state: T, payload: P) => Q;
};

/**
 * Type that represents async actions
 */
export type GXAsyncActionType<T, P = any> = {
  // Represent the type of the operation
  type: string;

  // List of cases
  steps: IBuilderCase<T, P>;
};

/**
 * Type of dispatched action
 */
export type DispatchedActionType = {
  // The type of the action
  type: string;

  // The payload of the action
  payload: any;
};

/**
 * Type of the signals context
 */
export type GXContextType = {
  // Signals
  signals: GXSignalType[];

  // Dispatch
  dispatch: React.Dispatch<GXAction>;

  // Async Dispatch
  asyncDispatch: (action: GXAction) => any;
};
