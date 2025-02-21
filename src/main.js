import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/assets/css/public.scss'
import 'swiper/css'
import 'swiper/css/pagination'

import App from './App.vue'
import router from './router'

const app = createApp(App)

window.document.title = "XSIM"

app.config.globalProperties.$http = axios;

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_API;

console.log(import.meta.env, "env info");

axios.interceptors.request.use((config) => {
  config.headers.Authorization =
    "Bearer" + " " + window.sessionStorage.getItem("access_token");
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      return Promise.reject(error);
    }
  }
);

app.use(createPinia())
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')
