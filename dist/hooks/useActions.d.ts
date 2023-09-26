import { type Actions } from './types.js';
declare const useActions: <T = Actions>(signalName: string, ...actions: string[]) => T;
export default useActions;
