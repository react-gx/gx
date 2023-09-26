import { type AsyncActions } from "./types";
declare const useAsyncActions: <T, P = AsyncActions<T>>(signalName: string, ...actions: string[]) => P;
export default useAsyncActions;
