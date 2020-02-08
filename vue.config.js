/**
 * vue config
 * @description
 * vue构建配置文件，[文档地址](https://cli.vuejs.org/zh/config/#vue-config-js)
 */
const argv = process.argv.splice(2);

// 打包体积分析插件
const BundleAnalyzerPlugin = argv.includes('--analyzer')
  ? [new (require('webpack-bundle-analyzer')).BundleAnalyzerPlugin()]
  : [];

module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL,
  productionSourceMap: false,

  // 开发服务器配置
  devServer: {
    // 代理配置
    proxy: require('./proxy.config')
  },

  // webpack config
  configureWebpack: {
    plugins: [...BundleAnalyzerPlugin]
  },

  // node_modules 中需要编译的库
  transpileDependencies: [/vue-awesome/]
};
