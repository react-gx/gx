import { AsyncActionStatusesType, CreateAsyncActionReturnType } from "../helpers/types.js";
/**
 * Interface for builder case
 */
export default interface IBuilderCase<T, P = any> {
    case(status: AsyncActionStatusesType, handler: (state: T, payload?: P) => T): IBuilderCase<T, P>;
}
/**
 * Builder case class for managing different cases of the asynchronous task
 * @param _cases List of cases defined for a specific asynchronous task
 */
export declare class BuilderCase<T, P = any> implements IBuilderCase<T, P> {
    private _cases;
    private _asyncAction;
    constructor();
    /**
     * Get the list of cases
     */
    get cases(): Case<T, P>[];
    /**
     * Get the async action
     */
    get asyncAction(): CreateAsyncActionReturnType;
    /**
     * Update the async action
     * @param asyncAction Async Action value
     */
    set asyncAction(asyncAction: CreateAsyncActionReturnType);
    /**
     * Update the cases
     */
    set cases(cases: Case<T, P>[]);
    /**
     * Method that add a new case into the _cases list and return a new case builder object
     * @param status Status of the asynchronous task
     * @param handler Function that is executed depending on the specific status
     * @returns
     */
    case(status: AsyncActionStatusesType, handler: (state: T, payload?: P) => T): IBuilderCase<T, P>;
}
/**
 * Case interface
 */
export interface Case<T, P = any> {
    status: AsyncActionStatusesType;
    handler: (state: T, payload?: P) => T;
}
