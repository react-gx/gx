import { Operations } from "./types.js";
declare const useOperations: <T = Operations<any>>(signalName: string) => T;
export default useOperations;
