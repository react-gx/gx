const gxReducer = (signals, action) => {
    // Prev signals
    const prevSignals = [...signals];
    // Get the signal name
    const signalName = action.type.split("/")[0];
    // Get the signal
    const signal = prevSignals.find((signal) => signal.name === signalName);
    if (!signal)
        throw new Error(`Signal "${signalName}" not found`);
    let actionToDispatch = null;
    // Get the action
    for (let act of signal.actions) {
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
        throw new Error(`Action "${action.type}" not found`);
    return prevSignals;
};
export default gxReducer;
//# sourceMappingURL=reducer.js.map