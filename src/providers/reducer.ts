import { type GXSignalType } from '../contexts/types.js'
import { type GXAction } from './types.js'

const gxReducer = (
  signals: GXSignalType[],
  action: GXAction
): GXSignalType[] => {
  const signalName = action.type.split('/')[0]

  // Loop through all signals, make updates on targeted states
  // and returns a new array of signals (immutability).
  return signals.map(
    ({ name, operations, actions, asyncActions, state: prevState }) => {
      let state = prevState

      // Capture the target signal (a state and a bunch of actions) from the array of signals.
      // Capture the action from array of actions (of the target signal).
      // Run the action and update the signal state.
      if (name === signalName) {
        if (!action.isAsync) {
          for (const { type, handler } of actions) {
            if (type === action.type) {
              state = handler(prevState, action.payload)
              break
            }
          }
        } else {
          console.log("youpiiiiiiiiii")
          state = action.payload
        }
      }

      return {
        name,
        operations,
        state,
        actions,
        asyncActions
      }
    }
  )
}

export default gxReducer
