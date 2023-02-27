import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uiComponents from './ui-components'

const app = createApp(App)

uiComponents.map(comment => app.component(comment.name, comment))
app.use(router)
app.use(store)
app.mount('#app')
