import { useContext } from "react";
import GXContext from "../contexts";
const useActions = (signalName, ...actions) => {
    if (!signalName || typeof signalName !== "string")
        throw new Error("Provide a signalName as first argument of useActions");
    // Get Global Context
    const { signals, dispatch } = useContext(GXContext);
    // Some handlers
    /**
     * Get actions of a signal
     * @param signalName
     * @returns
     */
    const handleGetActions = (signalName) => {
        const signal = signals.find((signal) => signal.name === signalName);
        if (signal) {
            if (!actions || actions.length === 0)
                return signal.actions;
            const filteredActions = [];
            for (let action of actions) {
                const actionName = `${signalName}/${action}`;
                const retrievedAction = signal.actions.find((act) => act.type === actionName);
                if (retrievedAction)
                    filteredActions.push(retrievedAction);
                else
                    throw new Error(`Action ${actionName} not found`);
            }
            return filteredActions;
        }
        else
            throw new Error(`Signal ${signalName} not found`);
    };
    const handleFormatActions = () => {
        // Get actions
        const nonFormattedActions = handleGetActions(signalName);
        // Formatted actions
        const formattedActions = {};
        for (const action of nonFormattedActions) {
            // Get action name
            const actionName = action.type.split("/")[1];
            formattedActions[actionName] = (payload) => {
                dispatch({
                    type: action.type,
                    payload,
                });
            };
        }
        return formattedActions;
    };
    return handleFormatActions();
};
export default useActions;
//# sourceMappingURL=useActions.js.map