import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import App from './App.vue'
import router from './router'

import 'element-plus/lib/theme-chalk/index.css';
import './style/index.scss'

const app = createApp(App);
app.use(router);
app.use(ElementPlus, { size: 'small'});
app.mount('#app');
