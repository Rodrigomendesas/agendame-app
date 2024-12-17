import App from './App.vue'
import router from './router'
import './plugins/yup';
import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import '@/scss/style.scss';

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
