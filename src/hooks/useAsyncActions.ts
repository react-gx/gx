import { useContext } from "react";
import { AsyncActions } from "./types";
import GXContext from "../contexts";
import { GXAsyncActionType } from "../contexts/types";
import { AsyncActionStatuses } from "../helpers/types";
import { BuilderCase } from "../interfaces/builderCase";

const useAsyncActions = <T, P = AsyncActions<T>>(
  signalName: string,
  ...actions: string[]
) => {
  if (!signalName || typeof signalName !== "string")
    throw new Error(
      "Provide a signalName as first argument of useAsyncActions"
    );

  // Get Global Context
  const { signals, asyncDispatch } = useContext(GXContext);

  // Some handlers

  /**
   * Get async actions of a signal
   * @param signalName
   * @returns
   */
  const handleGetAsyncActions = (signalName: string) => {
    const signal = signals.find((signal) => signal.name === signalName);

    if (signal) {
      if (!actions || actions.length === 0) return signal.asyncActions;

      const filteredActions: GXAsyncActionType<T>[] = [];

      for (let action of actions) {
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

  const handleFormatAsyncActions = (): P => {
    // Get actions
    const nonFormattedActions = handleGetAsyncActions(signalName);

    // Formatted actions
    const formattedActions = {} as any;

    for (const action of nonFormattedActions) {
      // Get action name
      const actionName = action.type.split("/")[1];

      formattedActions[actionName] = async (payload?: any) => {
        asyncDispatch({
          type: action.type,
          isAsync: true,
          status: AsyncActionStatuses.PENDING,
        });

        try {
          const response = await (
            action.steps as BuilderCase<any>
          ).asyncAction.handler(payload);

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
          const data = asyncDispatch({
            type: action.type,
            isAsync: true,
            status: AsyncActionStatuses.REJECTED,
            payload: error,
          });

          return {
            data,
            status: AsyncActionStatuses.REJECTED,
          };
        }
      };
    }

    return formattedActions;
  };

  return handleFormatAsyncActions();
};

export default useAsyncActions;
