/// <reference types="react" />
import { AsyncActionStatusesType, CreateStoreType } from '../helpers/types.js';
/**
 * Props of the GX Provider
 */
export type GXProviderProps = {
    children: React.ReactElement;
    store: CreateStoreType;
};
/**
 * Type of the actions
 */
export type GXAction = {
    type: string;
    isAsync: boolean;
    status?: AsyncActionStatusesType;
    payload?: any;
};
