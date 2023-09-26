"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderCase = void 0;
const types_js_1 = require("../helpers/types.js");
/**
 * Builder case class for managing different cases of the asynchronous task
 * @param _cases List of cases defined for a specific asynchronous task
 */
class BuilderCase {
    constructor() {
        this._cases = [];
        this._asyncAction = undefined;
    }
    // Getters
    /**
     * Get the list of cases
     */
    get cases() {
        return this._cases;
    }
    /**
     * Get the async action
     */
    get asyncAction() {
        return this._asyncAction;
    }
    // Setters
    /**
     * Update the async action
     * @param asyncAction Async Action value
     */
    set asyncAction(asyncAction) {
        this._asyncAction = asyncAction;
    }
    /**
     * Update the cases
     */
    set cases(cases) {
        this._cases = cases;
    }
    /**
     * Method that add a new case into the _cases list and return a new case builder object
     * @param status Status of the asynchronous task
     * @param handler Function that is executed depending on the specific status
     * @returns
     */
    case(status, handler) {
        this._cases.push({
            status,
            handler
        });
        return this;
    }
    /**
     * Method that add a pending case into the _cases list and return a new case builder object
     * @param handler Function that is executed depending on the specific status
     * @returns
     */
    onPending(handler) {
        return this.case(types_js_1.AsyncActionStatuses.PENDING, handler);
    }
    /**
     * Method that add a fulfilled case into the _cases list and return a new case builder object
     * @param handler Function that is executed depending on the specific status
     * @returns
     */
    onFulfilled(handler) {
        return this.case(types_js_1.AsyncActionStatuses.FULFILLED, handler);
    }
    /**
     * Method that add a rejected case into the _cases list and return a new case builder object
     * @param handler Function that is executed depending on the specific status
     * @returns
     **/
    onRejected(handler) {
        return this.case(types_js_1.AsyncActionStatuses.REJECTED, handler);
    }
}
exports.BuilderCase = BuilderCase;
//# sourceMappingURL=builderCase.js.map