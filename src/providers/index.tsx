import React, { useEffect } from "react";
import { useCallback, useReducer, useTransition } from "react";
import GXContext from "../contexts/index.js";
import { type GXAction, type GXProviderProps } from "./types.js";
import gxReducer from "./reducer.js";
import { type BuilderCase } from "../interfaces/builderCase.js";

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

  const asyncDispatch = useCallback((action: GXAction) => {
    const signalName = action.type.split("/")[0];

    const newState = signals.map(
      ({ name, operations, actions, asyncActions, state: prevState }) => {
        let state = prevState;

        // Capture the target signal (a state and a bunch of async actions) from the array of signals.
        // Capture the action from array of async actions (of the target signal).
        // Run the async action and update the signal state.
        if (name === signalName) {
          if (action.isAsync) {
            for (const { type, steps } of asyncActions) {
              if (type === action.type) {
                state = (steps as BuilderCase<any>).cases
                  .find((c) => c.status === action.status)
                  .handler(state, action.payload);
                break;
              }
            }
          }
        }

        return {
          name,
          operations,
          state,
          actions,
          asyncActions,
        };
      }
    );

    // Find the new state of the target signal
    const signal = newState.find((signal) => signal.name === signalName);

    dispatch({
      type: action.type,
      isAsync: action.isAsync,
      status: action.status,
      payload: signal.state,
    });

    return signal.state;
  }, []);

  // Context value
  const contextValue = {
    signals,
    dispatch: syncDispatch,
    asyncDispatch
  };

  return (
    <GXContext.Provider value={contextValue}>{children}</GXContext.Provider>
  );
}
