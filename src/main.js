import { createApp } from 'vue';
import router from '@/router';
import store from '@/store';
import App from '@/App.vue';

import '@/style/index.less';
import 'virtual:windi.css';
import 'virtual:windi-devtools';

const app = createApp(App);

app.use(router).use(store);

app.mount('#app');
