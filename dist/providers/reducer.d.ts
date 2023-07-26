import { GXSignalType } from "../contexts/types.js";
import { GXAction } from "./types.js";
declare const gxReducer: (signals: GXSignalType[], action: GXAction) => GXSignalType<any>[];
export default gxReducer;
