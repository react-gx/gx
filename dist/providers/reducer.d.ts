import { GXSignalType } from '../contexts/types';
import { GXAction } from './types';
declare const gxReducer: (state: GXSignalType[], action: GXAction) => GXSignalType<any>[];
export default gxReducer;
