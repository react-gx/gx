export type GXSignalType<T = any> = {
    name: string;
    state: T;
    actions: GXActionType<T>[];
};
export type GXActionType<T, P = any> = {
    type: string;
    handler: (state: T, payload: P) => T;
};
export type GXContextType = {
    signals: GXSignalType[];
};
