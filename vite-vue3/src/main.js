import { createApp } from 'vue'
import App from './App.vue'
// 路由
import router from './router'
// vuex
import store from './store'
// 全局样式
import 'styles/index.scss'
import vm from 'virtual-module'

console.log('virtual-module:', vm)

// element3
import element3 from 'plugins/element3'

// i18n
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages
})

createApp(App)
  .use(router)
  .use(store)
  .use(element3)
  .use(i18n)
  .mount('#app')
