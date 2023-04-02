import { useContext } from "react";
import GXContext from "../contexts";
var useActions = function (signalName) {
    var actions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        actions[_i - 1] = arguments[_i];
    }
    if (!signalName || typeof signalName !== "string")
        throw new Error("Provide a signalName as first argument of useActions");
    // Get Global Context
    var _a = useContext(GXContext), signals = _a.signals, dispatch = _a.dispatch;
    // Some handlers
    /**
     * Get actions of a signal
     * @param signalName
     * @returns
     */
    var handleGetActions = function (signalName) {
        var signal = signals.find(function (signal) { return signal.name === signalName; });
        if (signal) {
            if (!actions || actions.length === 0)
                return signal.actions;
            var filteredActions = [];
            var _loop_1 = function (action) {
                var actionName = "".concat(signalName, "/").concat(action);
                var retrievedAction = signal.actions.find(function (act) { return act.type === actionName; });
                if (retrievedAction)
                    filteredActions.push(retrievedAction);
                else
                    throw new Error("Action ".concat(actionName, " not found"));
            };
            for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
                var action = actions_1[_i];
                _loop_1(action);
            }
            return filteredActions;
        }
        else
            throw new Error("Signal ".concat(signalName, " not found"));
    };
    var handleFormatActions = function () {
        // Get actions
        var nonFormattedActions = handleGetActions(signalName);
        // Formatted actions
        var formattedActions = {};
        var _loop_2 = function (action) {
            // Get action name
            var actionName = action.type.split("/")[1];
            formattedActions[actionName] = function (payload) {
                dispatch({
                    type: action.type,
                    payload: payload,
                });
            };
        };
        for (var _i = 0, nonFormattedActions_1 = nonFormattedActions; _i < nonFormattedActions_1.length; _i++) {
            var action = nonFormattedActions_1[_i];
            _loop_2(action);
        }
        return formattedActions;
    };
    return handleFormatActions();
};
export default useActions;
//# sourceMappingURL=useActions.js.map