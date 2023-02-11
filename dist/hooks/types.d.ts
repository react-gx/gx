export type Action = {
    [key: string]: (payload: any) => void;
};
