import { type CreateAsyncActionProp, type CreateAsyncActionReturnType } from './types.js';
/**
 * This function create an async action with different statuses
 * @param handler Function that perform asynchronous task
 * @returns
 */
declare const createAsyncAction: (handler: CreateAsyncActionProp) => CreateAsyncActionReturnType;
export default createAsyncAction;
