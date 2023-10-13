"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const contexts_1 = __importDefault(require("../contexts"));
function useAllSignals() {
    // Global state that manage all signals
    const { signals } = (0, react_1.useContext)(contexts_1.default);
    return signals;
}
exports.default = useAllSignals;
//# sourceMappingURL=useAllSignals.js.map