import { useContext } from "react";
import GXContext from "../contexts";
import { Operations } from "./types";

const useOperations = (signalName: string) => {
  // Get Global Context
  const { signals } = useContext(GXContext);

  if (!signalName || typeof signalName !== "string")
    throw new Error("Provide a signalName as a first argument of useOperations");

  const handleFormatOperations = () => {
    const signal = signals.find((signal) => signal.name === signalName);

    if (!signal) throw new Error(`Signal ${signalName} not found`);

    // Get actions
    const nonFormattedOperations = signal.operations;

    // Formatted actions
    const formattedOperations: Operations = {};

    for (const operation of nonFormattedOperations) {
      // Get action name
      const operationName = operation.type.split("/")[1];

      formattedOperations[operationName] = (payload: any) => {
        return operation.handler(signal.state, payload);
      };
    }

    return formattedOperations;
  };

  return handleFormatOperations();
};

export default useOperations;
