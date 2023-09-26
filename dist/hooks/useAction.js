"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useActions_js_1 = __importDefault(require("./useActions.js"));
const useAction = (signalName, action) => {
    if (!signalName || typeof signalName !== 'string') {
        throw new Error('Provide a signalName as a first argument of useAction');
    }
    if (!action || typeof action !== 'string') {
        throw new Error('Provide an action as second argument of useAction');
    }
    const actions = (0, useActions_js_1.default)(signalName, action);
    return Object.values(actions)[0];
};
exports.default = useAction;
//# sourceMappingURL=useAction.js.map