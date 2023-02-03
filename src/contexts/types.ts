export type GXSignalType = {
  // Index of the signal
  id: string;

  // State inside the signal
  state: any,

  // Actons of the signal
  actions: GXActionType[]
}

export type GXActionType = {
  // Represent the type of the action
  type: string,

  // The handler function
  handler: Function
}

export type GXContext = {
  // Signals
  signals: GXSignalType[]
}