import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/route.js'

import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'
import './style/fonts.css'
import './style/index.css'
import '@vueform/vueform/dist/vueform.css'
import { createPinia } from 'pinia'
import Menubar from 'primevue/menubar'

const pinia = createPinia()
const app = createApp(App)

app.use(ToastService)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(pinia)
app.component('InputText', InputText)
app.component('PasswordInput', Password)
app.component('PrimaryButton', Button)
app.component('PrimeToast', Toast)
app.component('PrimeMenubar', Menubar)

app.use(Vueform, vueformConfig)

app.mount('#app')
