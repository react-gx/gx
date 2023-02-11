declare const useAction: (signalName: string) => {
    [key: string]: (payload: any) => void;
};
export default useAction;
