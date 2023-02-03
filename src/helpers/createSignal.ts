import { CreateSignalOptionType } from './types';
import { GXActionType } from '../contexts/types';

const createSignal = (options: CreateSignalOptionType) => {
  const actions: GXActionType[] = [];
  const actionsTable = Object.entries(options.actions)

  for (let action of actionsTable) {
    actions.push({
      type: `${options.id}/${action[0]}`,
      handler: action[1]
    })
  }

  const signal = {
    id: options.id,
    state: options.state,
    actions
  }

  return signal;
}

export default createSignal;