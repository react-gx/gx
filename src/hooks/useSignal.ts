import { useContext } from "react";
import GXContext from "../contexts";

const useSignal = (signalName: string) => {
  const { signals } = useContext(GXContext);

  /**
   * Get state of a signal base on its name
   * @param signalName 
   * @returns 
   */
  const handleGetSignalState = (signalName: string) => {
    const signal = signals.find(signal => signal.name === signalName);

    if (signal) {
      return signal.state;
    }

    return {};
  }

  return handleGetSignalState(signalName);
};

export default useSignal;
