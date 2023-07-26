import { createContext } from "react";
import { GXContextType } from "./types.js";

const GXContext = createContext<GXContextType>({
  signals: [],
  dispatch: () => {},
});

export default GXContext;
