/// <reference types="react" />
import { type AsyncActionStatusesType, type CreateStoreType } from '../helpers/types.js';
/**
 * Props of the GX Provider
 */
export interface GXProviderProps {
    children: React.ReactElement;
    store: CreateStoreType;
}
/**
 * Type of the actions
 */
export interface GXAction {
    type: string;
    isAsync: boolean;
    status?: AsyncActionStatusesType;
    payload?: any;
}
