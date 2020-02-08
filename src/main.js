import Vue from 'vue';

import App from './App.vue';
import store from './store';
import router from './router';

// 全局组件
import './components';

// 插件
import './plugins/element.js';

// 样式
import './styles/index.scss';

// mock 请求配置（如果需要就去掉注释）
// if (process.env.NODE_ENV === 'development') {
//   // mock 服务
//   require('./mock');
// }

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App)
});
