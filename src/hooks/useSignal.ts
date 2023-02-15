import { useContext, useMemo } from "react";
import GXContext from "../contexts";

const useSignal = (signalName: string) => {
  const { signals } = useContext(GXContext);
  const memoizedSignals = useMemo(() => signals, [signals]);

  /**
   * Get state of a signal base on its name
   * @param signalName 
   * @returns 
   */
  const handleGetSignalState = (signalName: string) => {
    const signal = memoizedSignals.find(signal => signal.name === signalName);

    if (signal) {
      return signal.state;
    }

    // Throw error if signal not found
    throw new Error(`Signal ${signalName} not found`);
  }

  return handleGetSignalState(signalName);
};

export default useSignal;
