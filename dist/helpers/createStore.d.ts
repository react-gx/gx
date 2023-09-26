import { type GXSignalType } from '../contexts/types.js';
import { type CreateStoreType } from './types.js';
/**
 * Function that create a store by collection a list of signals
 * @param signals List of signals
 * @returns
 */
declare const createStore: (signals: GXSignalType[]) => CreateStoreType;
export default createStore;
