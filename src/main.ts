import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import registerGlobalComponent from './globalComponents'
import '@/styles/element/default.scss'
const app = createApp(App)
app.use(createPinia())

const mount = async () => {
  registerGlobalComponent(app)
  app.use(router)
  app.mount('#app')

  // const files = require.context('../src/assets/icons', true, /\.svg$/)
  // files.keys().forEach(files)
}

mount()
