import './assets/css/input.css';

import App from './App.vue';
import { createApp } from 'vue';
import PiniaConfig from './PiniaConfig.js';
import router from './router';

const app = createApp(App);

app.use(PiniaConfig.init());
app.use(router);

app.mount('#app');
