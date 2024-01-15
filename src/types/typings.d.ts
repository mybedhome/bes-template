declare let require: {
  (path: string): any
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (
    paths: string[],
    callback: (require: (path: string) => any) => void
  ) => void
  context: (
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ) => {
    keys: () => string[]
    (id: string): any
  }
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const content: any
  export default content
}

declare module '*.css' {
  const content: any
  export default content
}

declare module '*.scss' {
  const content: any
  export default content
}

declare module '*.json' {
  const value: any
  export default value
}
