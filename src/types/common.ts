import type { ComponentOptions } from 'vue'

export type ApiSuccessResult<D> = {
  statusCode: number
  success: boolean
  data: D
}

export type ApiErrorResult<D = unknown> = {
  message: string
  name: string
  data: D
}

export interface TokenInfo {
  access_token: string
  token_type: string
  refresh_token: string
  expires_in: number
  scope: string
  jti: string
}

export type VueModuleNamespace = {
  [Symbol.toStringTag]: 'Module'
  default: ComponentOptions
}
