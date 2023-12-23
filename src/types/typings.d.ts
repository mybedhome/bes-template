declare var require: {
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
