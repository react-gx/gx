import { CreateStoreType } from '../helpers/types';

export type GXProviderProps = {
  children: React.ReactElement,
  store: CreateStoreType
}

export type GXAction = {
  type: string;
  payload: any
}