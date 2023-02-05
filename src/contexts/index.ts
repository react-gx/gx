import { createContext } from "react";
import { GXContextType } from "./types";

const GXContext = createContext<GXContextType>({
  signals: []
});

export default GXContext