import { App } from 'vue'

export default (app: App<Element>): void => {
  const requireComponent = require.context('./components', true, /\.vue$/)

  requireComponent.keys().forEach((path) => {
    const paths = path.split('/')
    if (paths.length > 3 || (paths[2] && paths[2] !== 'index.vue')) return

    const componentConfig = requireComponent(path)
    let fileName = path
    // components子目录下的index.vue组件名取父级目录名称
    if (path.endsWith('/index.vue')) {
      const matchs = path.match(/[^\.\/]+(?=\/index\.vue)/)
      if (matchs) fileName = matchs[0]
    }

    const componentName = fileName
      // 移除 "./" 从开始
      .replace(/^\.?\//, '')
      // 移除文件扩展名
      .replace(/\.\w+$/, '')
      // 将 kebab-case 转换为 PascalCase
      .split('/')
      .map((folderName) => {
        return folderName
          .split('-')
          .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
          .join('')
      })
      .join('')

    app.component(componentName, componentConfig.default || componentConfig)
  })
}
