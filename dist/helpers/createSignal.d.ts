import { CreateSignalOptionType } from "./types.js";
import { GXActionType, GXAsyncActionType, GXOperationType } from "../contexts/types.js";
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
    asyncActions: GXAsyncActionType<T, any>[];
};
export default createSignal;
