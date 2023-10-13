import { useContext } from "react"
import GXContext from "../contexts"

export default function useAllSignals() {
  // Global state that manage all signals
  const { signals } = useContext(GXContext)

  return signals
}