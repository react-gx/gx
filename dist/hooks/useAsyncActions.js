"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const contexts_1 = __importDefault(require("../contexts"));
const types_1 = require("../helpers/types");
const useAsyncActions = (signalName, ...actions) => {
    if (!signalName || typeof signalName !== "string")
        throw new Error("Provide a signalName as first argument of useAsyncActions");
    // Get Global Context
    const { signals, asyncDispatch } = (0, react_1.useContext)(contexts_1.default);
    // Some handlers
    /**
     * Get async actions of a signal
     * @param signalName
     * @returns
     */
    const handleGetAsyncActions = (signalName) => {
        const signal = signals.find((signal) => signal.name === signalName);
        if (signal) {
            if (!actions || actions.length === 0)
                return signal.asyncActions;
            const filteredActions = [];
            for (let action of actions) {
                const actionName = `${signalName}/${action}`;
                const retrievedAction = signal.asyncActions.find((act) => act.type === actionName);
                if (retrievedAction)
                    filteredActions.push(retrievedAction);
                else
                    throw new Error(`Async Action ${actionName} not found`);
            }
            return filteredActions;
        }
        else
            throw new Error(`Signal ${signalName} not found`);
    };
    const handleFormatAsyncActions = () => {
        // Get actions
        const nonFormattedActions = handleGetAsyncActions(signalName);
        // Formatted actions
        const formattedActions = {};
        for (const action of nonFormattedActions) {
            // Get action name
            const actionName = action.type.split("/")[1];
            formattedActions[actionName] = (payload) => __awaiter(void 0, void 0, void 0, function* () {
                asyncDispatch({
                    type: action.type,
                    isAsync: true,
                    status: types_1.AsyncActionStatuses.PENDING,
                });
                try {
                    const response = yield action.steps.asyncAction.handler(payload);
                    const data = asyncDispatch({
                        type: action.type,
                        isAsync: true,
                        status: types_1.AsyncActionStatuses.FULFILLED,
                        payload: response,
                    });
                    return {
                        data,
                        status: types_1.AsyncActionStatuses.FULFILLED,
                    };
                }
                catch (error) {
                    const data = asyncDispatch({
                        type: action.type,
                        isAsync: true,
                        status: types_1.AsyncActionStatuses.REJECTED,
                        payload: error,
                    });
                    return {
                        data,
                        status: types_1.AsyncActionStatuses.REJECTED,
                    };
                }
            });
        }
        return formattedActions;
    };
    return handleFormatAsyncActions();
};
exports.default = useAsyncActions;
//# sourceMappingURL=useAsyncActions.js.map