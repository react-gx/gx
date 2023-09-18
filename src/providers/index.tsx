import { useReducer, useTransition } from "react";
import GXContext from "../contexts/index.js";
import { GXAction, GXProviderProps } from "./types.js";
import gxReducer from "./reducer.js";
import { GXAsyncActionType } from "../contexts/types.js";
import { BuilderCase } from "../interfaces/builderCase.js";

export default function GXProvider({ children, store }: GXProviderProps) {
  // Global state that manage all signals
  const [signals, dispatch] = useReducer(gxReducer, store.getSignals());

  // Wrap your dispatch function with useTransition
  const [, startTransition] = useTransition();

  // Your state management logic using useContext and useReducer
  const syncDispatch = (action: GXAction) => {
    startTransition(() => {
      dispatch(action);
    });
  };

  const asyncDispatch = (action: GXAction) => {
    const signalName = action.type.split("/")[0];

    // Get the signal
    const signal = signals.find((signal) => signal.name === signalName);
    let state = signal.state;

    if (!signal) throw new Error(`Signal "${signalName}" not found`);

    if (action.isAsync) {
      let actionToDispatch: GXAsyncActionType<any> = null;

      // Get the action
      for (let act of signal.asyncActions) {
        if (act.type === action.type) {
          actionToDispatch = act;

          break;
        }
      }

      if (actionToDispatch)
        state = (actionToDispatch.steps as BuilderCase<any>).cases
          .find((c) => c.status === action.status)
          .handler(signal.state, action.payload);
      else throw new Error(`Async Action "${action.type}" not found`);
    }

    dispatch({
      type: action.type,
      isAsync: action.isAsync,
      status: action.status,
      payload: state,
    });

    return state;
  };

  // Context value
  const contextValue = {
    signals,
    dispatch: syncDispatch,
    asyncDispatch,
  };

  return (
    <GXContext.Provider value={contextValue}>{children}</GXContext.Provider>
  );
}
