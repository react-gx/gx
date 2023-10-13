"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const index_js_1 = __importDefault(require("../contexts/index.js"));
const reducer_js_1 = __importDefault(require("./reducer.js"));
function GXProvider({ children, store }) {
    // Global state that manage all signals
    const [signals, dispatch] = (0, react_1.useReducer)(reducer_js_1.default, store.getSignals());
    // Wrap your dispatch function with useTransition
    const [, startTransition] = (0, react_1.useTransition)();
    // Your state management logic using useContext and useReducer
    const syncDispatch = (action) => {
        startTransition(() => {
            dispatch(action);
        });
    };
    const asyncDispatch = (0, react_1.useCallback)((action) => {
        const signalName = action.type.split("/")[0];
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
        dispatch({
            type: action.type,
            isAsync: action.isAsync,
            status: action.status,
            payload: signal.state,
        });
        return signal.state;
    }, []);
    // Context value
    const contextValue = {
        signals,
        dispatch: syncDispatch,
        asyncDispatch
    };
    return ((0, jsx_runtime_1.jsx)(index_js_1.default.Provider, { value: contextValue, children: children }));
}
exports.default = GXProvider;
//# sourceMappingURL=index.js.map