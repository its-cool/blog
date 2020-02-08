/**
 * 自动注册所有的 components/ 下的全局组件
 * 注意：组件名就是文件夹的名称，文件夹内必须有一个 index.vue
 */
import Vue from 'vue';
import { getAllModules } from '@/utils/import-all';

// 获取所有组件
const modules = getAllModules(
  require.context('./', true, /[^.]+\/index\.(vue|js)$/)
);

// 注册所有组件
for (let key in modules) {
  Vue.component(key.replace('/index', ''), modules[key]);
}
