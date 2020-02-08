/**
 * svg 图标组件
 * @example
 * 1. 在官网查找 icon，获取 icon 名称（例如：lock）([官网](https://fontawesome.com/icons))
 * 2. 导入图标 `import 'vue-awesome/icons/lock'`
 * 3. 使用 `<SvgIcon name="lock" />`
 */
import Vue from 'vue';
import SvgIcon from 'vue-awesome/components/Icon';

// 图标在这里注册
import 'vue-awesome/icons/lock';

Vue.component('svg-icon', SvgIcon);
