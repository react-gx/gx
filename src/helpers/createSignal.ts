import { CreateSignalOptionType } from "./types.js";
import { GXActionType, GXOperationType } from "../contexts/types.js";

/**
 * Create a signal with a state and actions for managing this state
 * @param options
 * @returns
 */
const createSignal = <T>(options: CreateSignalOptionType<T>) => {
  const actions: GXActionType<T, any>[] = [];
  const operations: GXOperationType<T, any>[] = [];

  // Convert the actions object to an array
  const actionsTable = Object.entries(options.actions);

  for (let action of actionsTable) {
    actions.push({
      type: `${options.name}/${action[0]}`,
      handler: action[1],
    });
  }

  // Convert the operations object to an array
  const operationsTable = Object.entries(options.operations || {});

  for (let operation of operationsTable) {
    operations.push({
      type: `${options.name}/${operation[0]}`,
      handler: operation[1],
    });
  }

  // Create a signal
  const signal = {
    name: options.name,
    state: options.state,
    actions,
    operations,
  };

  return signal;
};

export default createSignal;
