import { type Actions } from './types.js';
declare const useAction: <T = Actions>(signalName: string, action: string) => any;
export default useAction;
