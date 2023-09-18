import { AsyncActionStatusesType, CreateStoreType } from '../helpers/types.js';

/**
 * Props of the GX Provider
 */
export type GXProviderProps = {
  // Children component of the GX Provider
  children: React.ReactElement,

  // Collection of signals
  store: CreateStoreType
}

/**
 * Type of the actions
 */
export type GXAction = {
  // Type of the action
  type: string;

  // Nature of the action
  isAsync: boolean;

  status?: AsyncActionStatusesType;

  // Payload of the action
  payload?: any
}