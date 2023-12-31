import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import registerGlobalComponent from './globalComponents'

const app = createApp(App)
app.use(createPinia())
const mount = () => {
  registerGlobalComponent(app)
  app.use(router)
  app.mount('#app')
}

mount()
