import { useContext, useMemo } from "react";
import GXContext from "../contexts";
var useSignal = function (signalName) {
    var signals = useContext(GXContext).signals;
    var memoizedSignals = useMemo(function () { return signals; }, [signals]);
    /**
     * Get state of a signal base on its name
     * @param signalName
     * @returns
     */
    var handleGetSignalState = function (signalName) {
        var signal = memoizedSignals.find(function (signal) { return signal.name === signalName; });
        if (signal) {
            return signal.state;
        }
        // Throw error if signal not found
        throw new Error("Signal ".concat(signalName, " not found"));
    };
    return handleGetSignalState(signalName);
};
export default useSignal;
//# sourceMappingURL=useSignal.js.map