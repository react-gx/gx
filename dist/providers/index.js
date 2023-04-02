var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useReducer } from "react";
import GXContext from "../contexts";
import gxReducer from "./reducer";
export default function GXProvider(_a) {
    var children = _a.children, store = _a.store;
    // Global state that manage all signals
    var _b = useReducer(gxReducer, store.getSignals()), signals = _b[0], dispatch = _b[1];
    // Context value
    var contextValue = {
        signals: signals,
        dispatch: dispatch,
    };
    return (_jsx(GXContext.Provider, __assign({ value: contextValue }, { children: children })));
}
;
//# sourceMappingURL=index.js.map