import { CreateAsyncActionReturnType } from "../helpers/types.js";
import IBuilderCase from "./builderCase.js";
export default interface IBuilder<T, P = any> {
    use(asyncAction: CreateAsyncActionReturnType): IBuilderCase<T, P>;
}
export declare class Builder<T, P = any> implements IBuilder<T, P> {
    private _builderCase;
    constructor();
    use(asyncAction: CreateAsyncActionReturnType): IBuilderCase<T, P>;
}
