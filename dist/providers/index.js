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
    // Context value
    const contextValue = {
        signals,
        dispatch,
    };
    return ((0, jsx_runtime_1.jsx)(index_js_1.default.Provider, Object.assign({ value: contextValue }, { children: children })));
}
exports.default = GXProvider;
;
//# sourceMappingURL=index.js.map