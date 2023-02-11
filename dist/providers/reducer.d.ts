import { GXSignalType } from "../contexts/types";
import { GXAction } from "./types";
declare const gxReducer: (signals: GXSignalType[], action: GXAction) => GXSignalType<any>[];
export default gxReducer;
