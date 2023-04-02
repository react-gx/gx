/**
 * Create a signal with a state and actions for managing this state
 * @param options
 * @returns
 */
var createSignal = function (options) {
    var actions = [];
    // Convert the actions object to an array
    var actionsTable = Object.entries(options.actions);
    for (var _i = 0, actionsTable_1 = actionsTable; _i < actionsTable_1.length; _i++) {
        var action = actionsTable_1[_i];
        actions.push({
            type: "".concat(options.name, "/").concat(action[0]),
            handler: action[1]
        });
    }
    // Create a signal
    var signal = {
        name: options.name,
        state: options.state,
        actions: actions
    };
    return signal;
};
export default createSignal;
//# sourceMappingURL=createSignal.js.map