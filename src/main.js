import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/tailwind-light/theme.css'
import './assets/main.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFootball, faTheaterMasks, faMusic } from '@fortawesome/free-solid-svg-icons'

import { createApp } from 'vue'
import App from './App.vue'

library.add(faFootball, faTheaterMasks, faMusic)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(PrimeVue)
app.mount('#app')
