import { GXAction } from "../providers/types";

export type GXSignalType<T = any> = {
  // Name of the signal
  name: string;

  // State inside the signal
  state: T,

  // Actions of the signal
  actions: GXActionType<T>[],

  // Operation of the signal
  operations?: GXOperationType<T>[]
}

export type GXActionType<T, P = any> = {
  // Represent the type of the action
  type: string,

  // The handler function
  handler: (state: T, payload: P) => T
}

export type GXOperationType<T, P = any, Q = any> = {
  // Represent the type of the operation
  type: string,

  // The handle function
  handler: (state: T, payload: P) => Q
}

export type DispatchedActionType = {
  // The type of the action
  type: string,

  // The payload of the action
  payload: any
}

export type GXContextType = {
  // Signals
  signals: GXSignalType[],

  // Dispatch
  dispatch: React.Dispatch<GXAction>
}