export type GXSignalType<T = any> = {
  // Name of the signal
  name: string;

  // State inside the signal
  state: T,

  // Actions of the signal
  actions: GXActionType<T>[]
}

export type GXActionType<T, P = any> = {
  // Represent the type of the action
  type: string,

  // The handler function
  handler: (state: T, payload: P) => T
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
  dispatch: (action: DispatchedActionType) => void
}