import { useContext } from "react";
import GXContext from "../contexts";
const useAction = (signalName, ...actions) => {
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
            console.log("actions", actions);
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
        // Get number of actions
        const numberOfActions = nonFormattedActions.length;
        // Check if actions are only one
        if (numberOfActions === 1) {
            const action = nonFormattedActions[0];
            // Return action as a function
            return (payload) => {
                dispatch({
                    type: action.type,
                    payload,
                });
            };
        }
        console.log("nonFormattedActions", nonFormattedActions);
        // If actions are more than one
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
export default useAction;
//# sourceMappingURL=useAction.js.map