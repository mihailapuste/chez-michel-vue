import { createApp } from 'vue';
import Observer from 'mobx-vue-lite';
import App from './App.vue';
import router from './router';
import './index.css';

createApp(App).use(Observer).use(router).mount('#app');
