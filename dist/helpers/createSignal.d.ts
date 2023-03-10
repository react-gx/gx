import { CreateSignalOptionType } from './types';
import { GXActionType } from '../contexts/types';
/**
 * Create a signal with a state and actions for managing this state
 * @param options
 * @returns
 */
declare const createSignal: <T>(options: CreateSignalOptionType<T>) => {
    name: string;
    state: T;
    actions: GXActionType<T, any>[];
};
export default createSignal;
