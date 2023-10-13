"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = void 0;
const builderCase_js_1 = require("./builderCase.js");
/**
 * @class Builder
 * @implements IBuilder
 * @description
 * Builder class to initialize a new builder case instance and return it in order to
 * chain the builder case methods, or onPending, onFulfilled, onRejected methods to define
 * the async action steps.
 */
class Builder {
    /**
     * This method takes an async action object and assign it to the builder case instance
     * @param asyncAction An async action object
     * @returns IBuilderCase
     */
    use(asyncAction) {
        const builderCase = new builderCase_js_1.BuilderCase();
        builderCase.asyncAction = asyncAction;
        builderCase.cases = [];
        return builderCase;
    }
}
exports.Builder = Builder;
//# sourceMappingURL=builder.js.map