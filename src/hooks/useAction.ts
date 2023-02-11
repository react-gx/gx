import { useContext, useState, useEffect } from 'react';
import GXContext from "../contexts";


const useAction = (signalName: string) => {
  // Get Global Context
  const { signals, dispatch } = useContext(GXContext);

  // Some handlers

  /**
   * Get actions of a signal
   * @param signalName 
   * @returns 
   */
  const handleGetActions = (signalName: string) => {
    const signal = signals.find(signal => signal.name === signalName);

    if (signal) {
      return signal.actions;
    }

    return [];
  }

  const handleFormatActions = () => {
    // Get actions
    const nonFormattedActions = handleGetActions(signalName);

    // Formatted actions
    const formattedActions: { [key: string]: (payload: any) => void } = {};

    for (const action of nonFormattedActions) {
      // Get action name
      const actionName = action.type.split('/')[1];

      formattedActions[actionName] = (payload: any) => {
        dispatch({
          type: action.type,
          payload
        });
      }
    }

    return formattedActions;
  } 

  return handleFormatActions();
};

export default useAction;
