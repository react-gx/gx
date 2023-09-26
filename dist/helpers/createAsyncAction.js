"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_js_1 = require("./types.js");
/**
 * This function create an async action with different statuses
 * @param handler Function that perform asynchronous task
 * @returns
 */
const createAsyncAction = (handler) => {
    return {
        pending: types_js_1.AsyncActionStatuses.PENDING,
        fulfilled: types_js_1.AsyncActionStatuses.FULFILLED,
        rejected: types_js_1.AsyncActionStatuses.REJECTED,
        handler
    };
};
exports.default = createAsyncAction;
//# sourceMappingURL=createAsyncAction.js.map