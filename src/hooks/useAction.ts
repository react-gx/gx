import { useContext, useState, useEffect } from "react";
import GXContext from "../contexts";
import { GXActionType } from "../contexts/types";

const useAction = (signalName: string, ...actions: string[]) => {
  // Get Global Context
  const { signals, dispatch } = useContext(GXContext);

  // Some handlers

  /**
   * Get actions of a signal
   * @param signalName
   * @returns
   */
  const handleGetActions = (signalName: string) => {
    const signal = signals.find((signal) => signal.name === signalName);

    if (signal) {
      if (!actions || actions.length === 0) return signal.actions;

      const filteredActions : GXActionType<any>[] = [];
      
      for (let action of actions) {
        const actionName = `${signalName}/${action}`;
        
        const retrievedAction = signal.actions.find((act) => act.type === actionName);
  
        if (retrievedAction) filteredActions.push(retrievedAction);
        else throw new Error(`Action ${actionName} not found`);
      }

      return filteredActions;
    } else throw new Error(`Signal ${signalName} not found`);
  };

  const handleFormatActions = () => {
    // Get actions
    const nonFormattedActions = handleGetActions(signalName);

    // Get number of actions
    const numberOfActions = nonFormattedActions.length;

    // Check if actions are only one
    if (numberOfActions === 1) {
      const action = nonFormattedActions[0];

      // Return action as a function
      return (payload: any) => {
        dispatch({
          type: action.type,
          payload,
        });
      };
    }

    // If actions are more than one

    // Formatted actions
    const formattedActions: { [key: string]: (payload: any) => void } = {};

    for (const action of nonFormattedActions) {
      // Get action name
      const actionName = action.type.split("/")[1];

      formattedActions[actionName] = (payload: any) => {
        dispatch({
          type: action.type,
          payload,
        });
      };
    }

    return formattedActions;
  };

  return handleFormatActions();
};

export default useAction;
