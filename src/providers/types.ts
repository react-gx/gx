import { GXSignalType } from '../contexts/types';

export type GXProviderProps = {
  children: React.ReactElement,
  store: GXSignalType[]
}

export type GXAction = {
  type: string;
  payload: any
}