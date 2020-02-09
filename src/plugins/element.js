/**
 * 按需加载 element-ui 组件
 * @description
 * [参考官网 - 按需加载](https://element.eleme.cn/#/zh-CN/component/quickstart#an-xu-yin-ru)
 */
import Vue from 'vue';

// 方式一：按需加载
import {
  Card,
  Divider,
  Image,
  MenuItem,
  Tooltip,
  Menu,
  Button,
  Loading,
  Message
} from 'element-ui';

Vue.use(Card);
Vue.use(Image);
Vue.use(Divider);
Vue.use(Button);
Vue.use(Tooltip);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;

// 方式二：完整加载方式
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI, { size: 'small' });
