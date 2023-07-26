"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const index_js_1 = __importDefault(require("../contexts/index.js"));
const useSignal = (signalName) => {
    const { signals } = (0, react_1.useContext)(index_js_1.default);
    const memoizedSignals = (0, react_1.useMemo)(() => signals, [signals]);
    /**
     * Get state of a signal base on its name
     * @param signalName
     * @returns
     */
    const handleGetSignalState = (signalName) => {
        const signal = memoizedSignals.find(signal => signal.name === signalName);
        if (signal) {
            return signal.state;
        }
        // Throw error if signal not found
        throw new Error(`Signal ${signalName} not found`);
    };
    return handleGetSignalState(signalName);
};
exports.default = useSignal;
//# sourceMappingURL=useSignal.js.map