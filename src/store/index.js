/**
 * store
 * @description
 * 状态管理入口
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import { getAllModules } from '@/utils/import-all';

Vue.use(Vuex);

// 批量导入 `./modules` 下所有的 store 数据
const modules = getAllModules(require.context('./modules', true, /\.js$/));

// 开发模式 debug
const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

export default store;
