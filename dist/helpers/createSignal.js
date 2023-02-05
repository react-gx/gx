/**
 * Create a signal with a state and actions for managing this state
 * @param options
 * @returns
 */
const createSignal = (options) => {
    const actions = [];
    // Convert the actions object to an array
    const actionsTable = Object.entries(options.actions);
    for (let action of actionsTable) {
        actions.push({
            type: `${options.name}/${action[0]}`,
            handler: action[1]
        });
    }
    // Create a signal
    const signal = {
        name: options.name,
        state: options.state,
        actions
    };
    return signal;
};
export default createSignal;
//# sourceMappingURL=createSignal.js.map