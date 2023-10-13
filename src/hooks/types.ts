import { type AsyncActionStatusesType } from '../helpers/types'

export type Actions = Record<string, (payload?: any) => void>

export type AsyncActions<T> = Record<string, (payload?: any) => Promise<{
  data: T
  status: AsyncActionStatusesType
}>>

export type Operations<P = any> = Record<string, (payload?: any) => P>
