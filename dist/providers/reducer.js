"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gxReducer = (signals, action) => {
    // Prev signals
    const prevSignals = [...signals];
    // Get the signal name
    const signalName = action.type.split("/")[0];
    // Get the signal
    const signal = prevSignals.find((signal) => signal.name === signalName);
    if (!signal)
        throw new Error(`Signal "${signalName}" not found`);
    if (!action.isAsync) {
        let actionToDispatch = null;
        // Get the action
        for (let act of signal.actions) {
            if (act.type === action.type) {
                actionToDispatch = act;
                break;
            }
        }
        if (actionToDispatch) {
            // Dispatch the action
            signal.state = actionToDispatch.handler(signal.state, action.payload);
        }
        else
            throw new Error(`Action "${action.type}" not found`);
    }
    else {
        signal.state = action.payload;
    }
    return prevSignals;
};
exports.default = gxReducer;
//# sourceMappingURL=reducer.js.map