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
    const asyncDispatch = (action) => {
        const signalName = action.type.split("/")[0];
        // Get the signal
        const signal = signals.find((signal) => signal.name === signalName);
        let state = signal.state;
        if (!signal)
            throw new Error(`Signal "${signalName}" not found`);
        if (action.isAsync) {
            let actionToDispatch = null;
            // Get the action
            for (let act of signal.asyncActions) {
                if (act.type === action.type) {
                    actionToDispatch = act;
                    break;
                }
            }
            if (actionToDispatch)
                state = actionToDispatch.steps.cases
                    .find((c) => c.status === action.status)
                    .handler(signal.state, action.payload);
            else
                throw new Error(`Async Action "${action.type}" not found`);
        }
        dispatch({
            type: action.type,
            isAsync: action.isAsync,
            status: action.status,
            payload: state,
        });
        return state;
    };
    // Context value
    const contextValue = {
        signals,
        dispatch: syncDispatch,
        asyncDispatch,
    };
    return ((0, jsx_runtime_1.jsx)(index_js_1.default.Provider, Object.assign({ value: contextValue }, { children: children })));
}
exports.default = GXProvider;
//# sourceMappingURL=index.js.map