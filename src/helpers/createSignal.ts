import { CreateSignalOptionType } from './types';
import { GXActionType } from '../contexts/types';

/**
 * Create a signal with a state and actions for managing this state
 * @param options 
 * @returns 
 */
const createSignal = (options: CreateSignalOptionType) => {
  const actions: GXActionType[] = [];

  // Convert the actions object to an array
  const actionsTable = Object.entries(options.actions)

  for (let action of actionsTable) {
    actions.push({
      type: `${options.id}/${action[0]}`,
      handler: action[1]
    })
  }

  // Create a signal
  const signal = {
    id: options.id,
    state: options.state,
    actions
  }

  return signal;
}

export default createSignal;