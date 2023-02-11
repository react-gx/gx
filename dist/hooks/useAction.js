import { useContext } from 'react';
import GXContext from "../contexts";
const useAction = (signalName) => {
    // Get Global Context
    const { signals, dispatch } = useContext(GXContext);
    // Some handlers
    /**
     * Get actions of a signal
     * @param signalName
     * @returns
     */
    const handleGetActions = (signalName) => {
        const signal = signals.find(signal => signal.name === signalName);
        if (signal) {
            return signal.actions;
        }
        return [];
    };
    const handleFormatActions = () => {
        // Get actions
        const nonFormattedActions = handleGetActions(signalName);
        // Formatted actions
        const formattedActions = {};
        for (const action of nonFormattedActions) {
            // Get action name
            const actionName = action.type.split('/')[1];
            formattedActions[actionName] = (payload) => {
                dispatch({
                    type: action.type,
                    payload
                });
            };
        }
        return formattedActions;
    };
    return handleFormatActions();
};
export default useAction;
//# sourceMappingURL=useAction.js.map