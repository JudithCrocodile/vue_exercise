
import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/dark/css-vars.css'
import zhTw from 'element-plus/dist/locale/zh-tw.mjs'
import 'virtual:svg-icons-register'
import './permission'

import globalComponent from '@/components'
import '@/styles/index.scss'
import router from './router'
import pinia from './store'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhTw,
})
app.use(ElementPlus)

app.use(globalComponent)
app.use(router)
app.use(pinia)

app.mount('#app')
