import { jsx as _jsx } from "react/jsx-runtime";
import { useReducer } from "react";
import GXContext from "../contexts";
import gxReducer from "./reducer";
const GXProvider = ({ children, store }) => {
    // Global state that manage all signals
    const [signals, dispatch] = useReducer(gxReducer, store.getSignal());
    // Context value
    const contextValue = {
        signals
    };
    return (_jsx(GXContext.Provider, Object.assign({ value: contextValue }, { children: children })));
};
export default GXProvider;
//# sourceMappingURL=index.js.map