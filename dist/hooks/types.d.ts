import { AsyncActionStatusesType } from "../helpers/types";
export type Actions = {
    [key: string]: (payload?: any) => void;
};
export type AsyncActions<T> = {
    [key: string]: (payload?: any) => Promise<{
        data: T;
        status: Omit<AsyncActionStatusesType, "PENDING">;
    }>;
};
export type Operations<P = any> = {
    [key: string]: (payload?: any) => P;
};
