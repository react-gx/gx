import { createContext } from 'react'
import { type GXContextType } from './types.js'

const GXContext = createContext<GXContextType>({
  signals: [],
  dispatch: () => {},
  asyncDispatch: () => {}
})

export default GXContext
