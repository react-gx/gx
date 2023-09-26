import type IBuilderCase from '../interfaces/builderCase.js'
import { type GXAction } from '../providers/types.js'

/**
 * Type that represents a signal
 */
export interface GXSignalType<T = any> {
  // Name of the signal
  name: string

  // State inside the signal
  state: T

  // Actions of the signal
  actions?: Array<GXActionType<T>>

  // Operations of the signal
  operations?: Array<GXOperationType<T>>

  // Async actions of the signal
  asyncActions?: Array<GXAsyncActionType<T>>
}

/**
 * Type that represents Actions
 */
export interface GXActionType<T, P = any> {
  // Represent the type of the action
  type: string

  // The handler function
  handler: (state: T, payload: P) => T
}

/**
 * Type that represents operations
 */
export interface GXOperationType<T, P = any, Q = any> {
  // Represent the type of the operation
  type: string

  // The handle function
  handler: (state: T, payload: P) => Q
}

/**
 * Type that represents async actions
 */
export interface GXAsyncActionType<T, P = any> {
  // Represent the type of the operation
  type: string

  // List of cases
  steps: IBuilderCase<T, P>
}

/**
 * Type of dispatched action
 */
export interface DispatchedActionType {
  // The type of the action
  type: string

  // The payload of the action
  payload: any
}

/**
 * Type of the signals context
 */
export interface GXContextType {
  // Signals
  signals: GXSignalType[]

  // Dispatch
  dispatch: React.Dispatch<GXAction>

  // Async Dispatch
  asyncDispatch: (action: GXAction) => any
}
