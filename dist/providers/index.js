import { jsx as _jsx } from "react/jsx-runtime";
import { useReducer, useTransition } from "react";
import GXContext from "../contexts";
import gxReducer from "./reducer";
export default function GXProvider({ children, store }) {
    // Global state that manage all signals
    const [signals, dispatch] = useReducer(gxReducer, store.getSignals());
    const [isPending, startTransition] = useTransition();
    // Dispatch function
    const dispatchWithTransition = (action) => {
        startTransition(() => {
            dispatch(action);
        });
    };
    // Context value
    const contextValue = {
        signals,
        dispatch: dispatchWithTransition,
    };
    return (_jsx(GXContext.Provider, Object.assign({ value: contextValue }, { children: children })));
}
;
//# sourceMappingURL=index.js.map