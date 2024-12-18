import App from './App.vue'
import router from './router'
import './plugins/yup';
import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import '@/scss/style.scss';
import './plugins/axios';
import pinia from './plugins/pinia';
import { useMeStore } from './store/me';

const app = createApp(App)
    app.use(pinia)

const meStore = useMeStore();

meStore.getMe()
  // uses 'finally' because app needs to be mounted regardless of the response
  .finally(()=>{
    app.use(router)
    app.use(vuetify)
    app.mount('#app')
  });
