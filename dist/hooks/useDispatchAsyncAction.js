"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const contexts_1 = __importDefault(require("../contexts"));
function useDispatchAsyncAction() {
    // Global state
    const { signals } = (0, react_1.useContext)(contexts_1.default);
    // Some handlers
    const asyncDispatch = (0, react_1.useCallback)((action) => {
        const signalName = action.type.split("/")[0];
        console.log(action.status);
        const newState = signals.map(({ name, operations, actions, asyncActions, state: prevState }) => {
            let state = prevState;
            // Capture the target signal (a state and a bunch of async actions) from the array of signals.
            // Capture the action from array of async actions (of the target signal).
            // Run the async action and update the signal state.
            if (name === signalName) {
                if (action.isAsync) {
                    for (const { type, steps } of asyncActions) {
                        if (type === action.type) {
                            state = steps.cases
                                .find((c) => c.status === action.status)
                                .handler(state, action.payload);
                            break;
                        }
                    }
                }
            }
            return {
                name,
                operations,
                state,
                actions,
                asyncActions,
            };
        });
        // Find the new state of the target signal
        const signal = newState.find((signal) => signal.name === signalName);
        // dispatch({
        //   type: action.type,
        //   isAsync: action.isAsync,
        //   status: action.status,
        //   payload: signal.state,
        // });
        return signal.state;
    }, []);
    return asyncDispatch;
}
exports.default = useDispatchAsyncAction;
//# sourceMappingURL=useDispatchAsyncAction.js.map