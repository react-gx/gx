declare const useAction: (signalName: string, ...actions: string[]) => ((payload: any) => void) | {
    [key: string]: (payload: any) => void;
};
export default useAction;
