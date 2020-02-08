/**
 * 路由配置
 */
import Vue from 'vue';
import Router from 'vue-router';

// 主容器组件
import Layout from '../layout';

// 子页面组件
import DashBoard from './model/dash-board';
import Classification from './model/classification';
import AboutMe from './model/about-me';

export const subPath = [DashBoard, Classification, AboutMe];

// 路由集合
const routes = [
  {
    path: '/',
    name: 'root',
    component: Layout,
    // 子模块的路由注册
    children: subPath
  },
  {
    path: '*',
    redirect: '/'
  }
];

Vue.use(Router);

export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes
});
