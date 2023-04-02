var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var gxReducer = function (signals, action) {
    // Prev signals
    var prevSignals = __spreadArray([], signals, true);
    // Get the signal name
    var signalName = action.type.split("/")[0];
    // Get the signal
    var signal = prevSignals.find(function (signal) { return signal.name === signalName; });
    if (!signal)
        throw new Error("Signal \"".concat(signalName, "\" not found"));
    var actionToDispatch = null;
    // Get the action
    for (var _i = 0, _a = signal.actions; _i < _a.length; _i++) {
        var act = _a[_i];
        if (act.type === action.type) {
            actionToDispatch = act;
            break;
        }
    }
    if (actionToDispatch) {
        // Dispatch the action
        signal.state = actionToDispatch.handler(signal.state, action.payload);
    }
    else
        throw new Error("Action \"".concat(action.type, "\" not found"));
    return prevSignals;
};
export default gxReducer;
//# sourceMappingURL=reducer.js.map