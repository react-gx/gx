import useActions from "./useActions";
const useAction = (signalName, action) => {
    if (!signalName || typeof signalName !== "string")
        throw new Error("Provide a signalName as a first argument of useAction");
    if (!action || typeof action !== "string")
        throw new Error("Provide an action as second argument of useAction");
    const actions = useActions(signalName, action);
    return Object.values(actions)[0];
};
export default useAction;
//# sourceMappingURL=useAction.js.map