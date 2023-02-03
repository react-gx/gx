import { GXSignalType } from '../contexts/types';
import { GXAction } from './types';

const gxReducer = (state: GXSignalType[], action: GXAction) => {
  switch (action.type) {
    case 'add/signal': {
      const prev = state.slice();

      prev.push(action.payload);

      return prev;
    }

    default: return state
  }
}

export default gxReducer