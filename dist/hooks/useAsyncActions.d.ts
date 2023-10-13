import { type AsyncActions } from "./types";
declare const useAsyncActions: <T, P = AsyncActions<any>>(signalName: string, ...actions: string[]) => P;
export default useAsyncActions;
