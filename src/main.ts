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
}

mount()
