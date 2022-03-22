
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app =createApp(App)
/* createApp(App).mount('#app') */

app
    .use(store)
    .mount('#app')
