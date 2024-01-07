import type { AxiosRequestConfig } from 'axios'
import { utils } from '@/utils'

const getRequestIdentifier = (config: AxiosRequestConfig) => {
  const data = utils.formDataToJson(config.data)
  return (
    (config.url as string) +
    (config.params ? '-' + JSON.stringify(config.params) : '') +
    (data ? '-' + JSON.stringify(data) : '') +
    '-' +
    config.method
  )
}

class RequestStore {
  requestMap = new Map<string, AbortController>()
  addRequest(config: AxiosRequestConfig) {
    const identifier = getRequestIdentifier(config)
    if (this.requestMap.has(identifier)) {
      this.removeRequest(config, identifier)
    }
    const controller = new AbortController()
    config.signal = controller.signal
    this.requestMap.set(identifier, controller)
  }

  removeRequest(config: AxiosRequestConfig, requestIdentifier: string = '') {
    if (utils.isString(config.data)) {
      config.data = JSON.parse(config.data)
    }
    const identifier = requestIdentifier || getRequestIdentifier(config)
    if (this.requestMap.has(identifier)) {
      const abortController = this.requestMap.get(identifier)
      abortController && abortController.abort('重复请求被取消')
      this.requestMap.delete(identifier)
    }
  }

  clearPendingRequest() {
    this.requestMap.forEach((abortController) => {
      abortController.abort('路由跳转前取消pending状态的请求')
    })
  }
}

export default new RequestStore()
