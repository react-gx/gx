import { GXSignalType } from "../contexts/types";
import { GXAction } from "./types";

const gxReducer = (signals: GXSignalType[], action: GXAction) => {
  // Prev signals
  const prevSignals = [...signals];

  // Get the signal name
  const signalName = action.type.split("/")[0];

  // Get the signal
  const signal = prevSignals.find((signal) => signal.name === signalName);

  if (!signal) {
    console.warn(`Signal "${signalName}" not found`);

    return prevSignals;
  }

  let actionToDispatch = null;

  // Get the action
  for (let act of signal.actions) {
    if (act.type === action.type) {
      actionToDispatch = act;

      break;
    }
  }

  if (actionToDispatch) {
    // Dispatch the action
    signal.state = actionToDispatch.handler(signal.state, action.payload);
  } else {
    console.warn(`Action "${action.type}" not found`);
  }

  return prevSignals;
};

export default gxReducer;
