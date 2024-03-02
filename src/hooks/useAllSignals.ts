import { useContext } from "react"
import GXContext from "../contexts/index.js"

export default function useAllSignals() {
  // Global state that manage all signals
  const { signals } = useContext(GXContext)

  return signals
}