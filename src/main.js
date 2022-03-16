import { createApp } from 'vue';
// import TheSeaUI from '@the-sea/components';
import router from '@/router';
import store from '@/store';
import App from '@/App.vue';

import '@/style/index.less';
import 'virtual:windi.css';
import 'virtual:windi-devtools';

// console.log(TheSeaUI);

const app = createApp(App);

app.use(router).use(store);
// app.use(TheSeaUI);

app.mount('#app');
