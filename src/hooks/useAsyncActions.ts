import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { type AsyncActions } from "./types";
import GXContext from "../contexts";
import { type GXAsyncActionType } from "../contexts/types";
import { AsyncActionStatuses } from "../helpers/types";
import { BuilderCase } from "../interfaces/builderCase";

const useAsyncActions = <T, P = AsyncActions<T>>(
  signalName: string,
  ...actions: string[]
) => {
  if (!signalName || typeof signalName !== "string") {
    throw new Error(
      "Provide a signalName as first argument of useAsyncActions"
    );
  }

  // Get Global Context
  const { signals, asyncDispatch } = useContext(GXContext);

  // Async action callback
  const asyncActionCallback = useCallback(
    async (action: GXAsyncActionType<T>, payload?: any) => {
      // Dispatch pending action
      asyncDispatch({
        type: action.type,
        isAsync: true,
        status: AsyncActionStatuses.PENDING,
      });

      try {
        // Execute async action
        const response = await (
          action.steps as BuilderCase<any>
        ).asyncAction.handler(payload);

        // Dispatch fulfilled action
        const data = asyncDispatch({
          type: action.type,
          isAsync: true,
          status: AsyncActionStatuses.FULFILLED,
          payload: response,
        });

        return {
          data,
          status: AsyncActionStatuses.FULFILLED,
        };
      } catch (error) {
        // Dispatch rejected action
        const data = asyncDispatch({
          type: action.type,
          isAsync: true,
          status: AsyncActionStatuses.REJECTED,
          payload: error,
        });

        return {
          data,
          error,
          status: AsyncActionStatuses.REJECTED,
        };
      }
    },
    []
  );

  // Some handlers

  /**
   * Get async actions of a signal
   * @param signalName
   * @returns
   */
  const handleGetAsyncActions = (signalName: string) => {
    const signal = signals.find((signal) => signal.name === signalName);

    if (signal) {
      if (!actions || actions.length === 0) return signal.asyncActions || [];

      const filteredActions: Array<GXAsyncActionType<T>> = [];

      for (const action of actions) {
        const actionName = `${signalName}/${action}`;

        const retrievedAction = signal.asyncActions.find(
          (act) => act.type === actionName
        );

        if (retrievedAction) filteredActions.push(retrievedAction);
        else throw new Error(`Async Action ${actionName} not found`);
      }

      return filteredActions;
    } else throw new Error(`Signal ${signalName} not found`);
  };

  /**
   * Format async actions
   * @returns
   */
  const handleFormatAsyncActions = (): P => {
    // Get actions
    const nonFormattedActions = handleGetAsyncActions(signalName);

    // Formatted actions
    const formattedActions = nonFormattedActions.map((action) => {
      // Get action name
      const actionName = action.type.split("/")[1];

      return [
        actionName,
        async (payload?: any) => {
          return asyncActionCallback(action, payload);
        },
      ];
    });

    return Object.fromEntries(formattedActions);
  };

  return handleFormatAsyncActions();
};

export default useAsyncActions;
