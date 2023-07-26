import { CreateSignalOptionType } from "./types.js";
import { GXActionType, GXOperationType } from "../contexts/types.js";
/**
 * Create a signal with a state and actions for managing this state
 * @param options
 * @returns
 */
declare const createSignal: <T>(options: CreateSignalOptionType<T>) => {
    name: string;
    state: T;
    actions: GXActionType<T, any>[];
    operations: GXOperationType<T, any, any>[];
};
export default createSignal;
