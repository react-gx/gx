import { GXSignalType } from "../contexts/types.js";
import { GXAction } from "./types.js";

const gxReducer = (
  signals: GXSignalType[],
  action: GXAction
): GXSignalType[] => {
  const signalName = action.type.split("/")[0];

  // Loop through all signals, make updates on targeted states
  // and returns a new array of signals (immutability).
  return signals.map(({ name, operations, actions, state: prevState }) => {
    let state = prevState;

    // Capture the target signal (a state and a bunch of actions) from the array of signals.
    // Capture the action from array of actions (of the target signal).
    // Run the action and update the signal state.
    if (name === signalName) {
      for (let { type, handler } of actions) {
        if (type === action.type) {
          state = handler(prevState, action.payload);
          break;
        }
      }
    }

    return {
      name,
      operations,
      state,
      actions,
    };
  });
};

export default gxReducer;
