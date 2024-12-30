import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//@ts-ignore
import { VsxIcon } from 'vue-iconsax'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('VsxIcon', VsxIcon)
app.mount('#app')
