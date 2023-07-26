export type Actions = {
  [key: string]: (payload?: any) => void
}

export type Operations<P = any> = {
  [key: string]: (payload?: any) => P
}