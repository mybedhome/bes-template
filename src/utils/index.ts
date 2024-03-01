const isNull = (arg: unknown): boolean => arg == null

const isUndefined = (arg: unknown): boolean => typeof arg === 'undefined'

const isNil = (arg: unknown): boolean => isNull(arg) || isUndefined(arg)

const isInt = (arg: unknown): boolean => Number.isInteger(arg)

const isNaN = (arg: unknown): boolean => Number.isNaN(arg)

interface FormData {
  new (): typeof FormData
  forEach(
    callback: (value: FormDataEntryValue, key: string, parent: FormData) => void
  ): void
}

// const isWhatType = (type: string) => (arg: ConstructorType) =>
//   !isNil(arg) && arg.constructor.name === type
interface WithConstructor {
  constructor: { name: string }
}

const isWhatType =
  <T extends WithConstructor>(type: string) =>
  (arg: T | undefined): boolean =>
    typeof arg !== 'undefined' && arg.constructor.name === type

const isFunction = isWhatType('Function')
const isAsyncFunction = isWhatType('AsyncFunction')
const isArray = isWhatType('Array')
const isFile = isWhatType('File')
const isBlob = isWhatType('Blob')
const isFormData = isWhatType('FormData')
const isRegExp = isWhatType('RegExp')
const isNumber = isWhatType('Number')
const isString = isWhatType('String')
const isBoolean = isWhatType('Boolean')
const isDate = isWhatType('Date')
const isSymbol = isWhatType('Symbol')
const isMap = isWhatType('Map')
const isWeakMap = isWhatType('WeakMap')
const isSet = isWhatType('Set')
const isWeakSet = isWhatType('WeakSet')
const isPromise = isWhatType('Promise')

const isEmptyArray = (arg: Array<unknown>) => isArray(arg) && arg.length === 0
const isValidArray = (arg: Array<unknown>) => isArray(arg) && arg.length > 0

const isPlainObject = (
  arg: { constructor?: () => unknown } | unknown
): boolean => !isNil(arg) && !!arg && arg.constructor === Object

const isEmptyObject = (arg: Record<string, unknown>) => {
  return isPlainObject(arg) || Object.keys(arg).length === 0
}

const isEmpty = (arg: unknown) => {
  if (
    typeof arg === 'undefined' ||
    arg === null ||
    Number.isNaN(arg) ||
    arg === '' ||
    Object.keys(arg).length === 0 ||
    (Array.isArray(arg) && arg.length === 0)
  ) {
    return true
  }
  return false
}

// 解析json字符串为json对象
const parseJSON = <V = Record<string, unknown>>(
  arg: string | null,
  failResult = {} as V
): V => {
  try {
    return typeof arg === 'string' ? JSON.parse(arg) : arg
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.error(error.message)
    }
    return failResult
  }
}

/**
 * @param { boolean } isHyphen 是否有连字符号
 * @param {boolean} isUppercase 是否大写
 * @returns 唯一的guid
 */
const guid = (option: { isHyphen: boolean; isUppercase: boolean }) => {
  const opt = Object.assign({ isHyphen: false, isUppercase: false }, option)
  let str = ''
  const hexDigits = '0123456789abcdef'
  for (let i = 0; i < 32; i++) {
    const index = Math.floor(Math.random() * 16)
    const char = opt.isUppercase
      ? hexDigits[index].toUpperCase()
      : hexDigits[index]
    const hyptenChar =
      opt.isHyphen && [8, 12, 16, 20].includes(i) ? '-' + char : char
    str += hyptenChar
  }
  return str
}

// 查找对象属性的值，支持路径嵌套查询
const find = (obj: Record<string, unknown>, ...paths: Array<string>) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return paths.reduce((acc, path) => {
    return acc?.[path]
  }, obj)
}

// 遍历对象
function forEachObject<T extends object>(
  obj: T,
  fn: (value: T[keyof T], key: string) => void
): void {
  for (const key in obj) {
    fn(obj[key], key)
  }
}

// 将formData转换为json
const formDataToJson = (formData: FormData) => {
  if (!isFormData(formData)) return {}
  const object: { [index: string]: unknown } = {}
  formData.forEach((value, key) => {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (!Array.isArray(object[key])) {
        object[key] = [object[key]]
      }
      ;(object[key] as Array<unknown>).push(value)
    } else {
      object[key] = value
    }
  })
  return object
}

// 将json转换为FormData
const jsonToFormData = (data: Record<string, unknown>) => {
  const fd = new FormData()
  if (!isEmptyObject(data)) {
    for (const key of Object.keys(data)) {
      const value = data[key]
      if (value instanceof Blob) {
        fd.append(key, value)
      } else if (value && typeof value === 'object') {
        fd.append(key, JSON.stringify(value))
      } else {
        fd.append(key, String(data[key]))
      }
    }
  }
  return fd
}

/**
 * 对象数组转换成对象
 * @param array 对象数组
 * @param key 对象的某个属性必须具有唯一值，通常是id
 * @returns 返回对象属性的值作为属性的对象
 */
function arrayToObject<T extends Record<string, never>>(
  array: T[],
  key: keyof T = 'id'
): Record<T[keyof T], T> {
  const obj = {} as Record<T[keyof T], T>
  array.forEach((item) => {
    obj[item[key]] = item
  })
  return obj
}

// 生成指定长度的随机数字
const generateRandomNumber = (length: number = 8): string =>
  Math.floor(
    Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)
  ).toString()

const delay = <D>(timeout: number, data?: D) => {
  return new Promise<D | undefined>((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, timeout)
  })
}

const px2vw = (
  px: number,
  options = {} as { hasUnit: boolean; baseWidth: number }
): string => {
  const opt = Object.assign({ hasUnit: true, baseWidth: 375 }, options)
  const value = ((px / opt.baseWidth) * 100).toString()
  return opt.hasUnit ? value + 'vw' : value
}

const px2rem = (px: number, base = 16, hasUnit: boolean = true) => {
  return hasUnit
    ? (px / base).toFixed(4) + 'rem'
    : Number((px / base).toFixed(4))
}

const platform = () => {
  const ua = navigator.userAgent
  const isWindowsPhone = / (?:Windows Phone)/.test(ua)
  const isSymbian = / (?:Symbian0S)/.test(ua) || isWindowsPhone
  const isAndroid = / (?:Android)/.test(ua)
  const isFireFox = /(?:Firefox)/.test(ua)
  const isTablet =
    /(?:iPad|PlayBook)/.test(ua) ||
    (isAndroid && !/ (?:Mobile)/.test(ua)) ||
    (isFireFox && / (?:Tablet)/.test(ua))
  const isIos = / (?:iPhone)/.test(ua) && !isTablet
  const isMobile = isIos || isAndroid || isSymbian || isTablet
  const isPc = !isMobile
  return {
    isMobile,
    isPc,
    isAndroid,
    isIos,
    isTablet
  }
}

const getCssVar = (varName: string, element: HTMLElement) => {
  const dom = element || document.querySelector('body')
  return getComputedStyle(dom).getPropertyValue(varName)
}

const mixColor = function (color_1: string, color_2: string, weight: number) {
  function d2h(d: number) {
    return d.toString(16)
  }
  function h2d(h: string) {
    return parseInt(h, 16)
  }

  weight = typeof weight !== 'undefined' ? weight : 50

  let color = '#'
  const c1 = color_1.match(/#?(.{6})/),
    c2 = color_2.match(/#?(.{6})/)
  if (!c1 || !c2) {
    throw new Error('请传入合法的16进制颜色值!')
  }
  for (let i = 0; i <= 5; i += 2) {
    const v1 = h2d(c1[1].substring(i, i + 2))
    const v2 = h2d(c2[1].substring(i, i + 2))
    let val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)))

    while (val.length < 2) {
      val = '0' + val
    }

    color += val
  }

  return color
}

const getEpNamespace = () => {
  for (const sheet of document.styleSheets) {
    // 遍历样式表中的所有规则
    for (const rule of sheet.cssRules) {
      // 检查规则是否是 :root 伪类
      if (rule instanceof CSSStyleRule && rule.selectorText === ':root') {
        // 遍历 :root 伪类中定义的所有CSS属性
        for (const property of rule.style) {
          // 检查属性名是否以 '--' 开头
          if (property.startsWith('--') && property.includes('color-white')) {
            const matchs = property.match(/--(.*)-color-white/)
            if (matchs) return matchs[1]
            return 'ep'
          }
        }
        break
      }
    }
  }
}

export const utils = {
  isNull,
  isUndefined,
  isNil,
  isInt,
  isNaN,
  isFunction,
  isAsyncFunction,
  isArray,
  isFile,
  isBlob,
  isFormData,
  isRegExp,
  isNumber,
  isString,
  isBoolean,
  isDate,
  isSymbol,
  isMap,
  isWeakMap,
  isSet,
  isWeakSet,
  isPromise,
  isEmptyArray,
  isValidArray,
  isPlainObject,
  isEmptyObject,
  isEmpty,
  parseJSON,
  formDataToJson,
  jsonToFormData,
  delay,
  guid,
  px2vw,
  px2rem,
  find,
  platform,
  generateRandomNumber,
  forEachObject,
  arrayToObject,
  getCssVar,
  mixColor,
  getEpNamespace
}
