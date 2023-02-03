import { createContext } from "react";
import { GXContext } from "./types";

const GXContext = createContext<GXContext>({
  signals: []
});

export default GXContext