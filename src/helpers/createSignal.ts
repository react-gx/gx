import { CreateSignalOptionType } from './types';
import { GXActionType } from '../contexts/types';

/**
 * Create a signal with a state and actions for managing this state
 * @param options 
 * @returns 
 */
const createSignal = <T>(options: CreateSignalOptionType<T>) => {
  const actions: GXActionType<T, any>[] = [];

  // Convert the actions object to an array
  const actionsTable = Object.entries(options.actions)

  for (let action of actionsTable) {
    actions.push({
      type: `${options.name}/${action[0]}`,
      handler: action[1]
    })
  }

  // Create a signal
  const signal = {
    name: options.name,
    state: options.state,
    actions
  }

  return signal;
}

export default createSignal;