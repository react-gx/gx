import { type GXSignalType } from '../contexts/types.js';
import { type GXAction } from './types.js';
declare const gxReducer: (signals: GXSignalType[], action: GXAction) => GXSignalType[];
export default gxReducer;
