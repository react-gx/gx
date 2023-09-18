"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Function that create a store by collection a list of signals
 * @param signals List of signals
 * @returns
 */
const createStore = (signals) => {
    return {
        getSignals: () => signals,
    };
};
exports.default = createStore;
//# sourceMappingURL=createStore.js.map