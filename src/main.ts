import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
// import '@/styles/element.scss'
import App from './App.vue'
import registerGlobalComponent from './globalComponents'

const app = createApp(App)
app.use(createPinia())

const mount = async () => {
  registerGlobalComponent(app)
  app.use(router)
  app.mount('#app')
}

mount()
