import { CreateAsyncActionReturnType } from "../helpers/types.js";
import IBuilderCase, { BuilderCase } from "./builderCase.js";

export default interface IBuilder<T, P = any> {
  use(asyncAction: CreateAsyncActionReturnType): IBuilderCase<T, P>;
}

export class Builder<T, P = any> implements IBuilder<T, P> {
  private _builderCase: BuilderCase<T, P>;

  constructor() {
    this._builderCase = new BuilderCase();
  }

  use(asyncAction: CreateAsyncActionReturnType): IBuilderCase<T, P> {
    this._builderCase.asyncAction = asyncAction;

    return this._builderCase;
  }
}
