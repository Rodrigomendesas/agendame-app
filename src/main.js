import App from './App.vue'
import router from './router'
import './plugins/yup';
import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import '@/scss/style.scss';
import './plugins/axios';
import pinia from './plugins/pinia';

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(pinia)
app.mount('#app')
