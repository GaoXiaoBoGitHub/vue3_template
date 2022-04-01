import { createApp } from 'vue';
import TDesign from 'tdesign-vue-next';
import TheSeaUI from '@the-sea/components';
import router from '@/router';
import store from '@/store';
import App from '@/App.vue';

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';
import '@/styles/index.less';
import 'virtual:windi.css';
import 'virtual:windi-devtools';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(TDesign);
app.use(TheSeaUI);

app.mount('#app');
