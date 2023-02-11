const gxReducer = (signals, action) => {
    // Prev signals
    const prevSignals = [...signals];
    // Get the signal name
    const signalName = action.type.split("/")[0];
    // Get the signal
    const signal = prevSignals.find((signal) => signal.name === signalName);
    if (!signal) {
        console.warn(`Signal "${signalName}" not found`);
        return prevSignals;
    }
    let actionToDispatch = null;
    // Get the action
    for (let act of signal.actions) {
        if (act.type === action.type) {
            actionToDispatch = act;
            break;
        }
    }
    if (actionToDispatch) {
        // Display prev state
        console.log(`Prev state of "${signal.name}" signal:`, signal.state);
        // Display action payload
        console.log(`Action payload: `, action.payload);
        // Dispatch the action
        signal.state = actionToDispatch.handler(signal.state, action.payload);
        // Display new state
        console.log(`New state of "${signal.name}" signal:`, signal.state);
    }
    else {
        console.warn(`Action "${action.type}" not found`);
    }
    return prevSignals;
};
export default gxReducer;
//# sourceMappingURL=reducer.js.map