"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gxReducer = (signals, action) => {
    // Loop through all signals, make updates on states
    // and returns a new array of signals (immutability).
    return signals.map(({ name, operations, actions, state: prevState }) => {
        let state = prevState;
        // Capture the target signal (a state and a bunch of actions) from the array of signals.
        // Capture the action from array of actions (of the target signal).
        // Run the action and update the signal state.
        if (name === action.type.split("/")[0]) {
            for (let { type, handler } of actions) {
                if (type === action.type) {
                    state = handler(prevState, action.payload);
                    break;
                }
            }
        }
        return {
            name,
            operations,
            state,
            actions,
        };
    });
};
exports.default = gxReducer;
//# sourceMappingURL=reducer.js.map