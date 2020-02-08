import axios from 'axios';
import { stringify } from 'qs';

import { errorMessage } from './error-handler';
import { localDataUser } from './local-data';

// 取消请求（用于当没有 token 时，取消当前的请求，直到获取 token）
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

// 这些接口不添加 token
const requestNoToken = ['/login'];

/**
 * 创建 axios 服务实例
 * @description
 * 该方法所需的参数如下：
 * @param {String} url 请求的 url，默认配置了一级路径，只需二级路径，例如：/login
 * @param {String} method 请求方式 `get/post`
 * @param {Object} data post 请求的参数
 * @param {Object} params get 请求的参数
 */
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true,
  timeout: 20000,
  cancelToken: source.token
});

export default service;

// 请求拦截
service.interceptors.request.use(
  (config) => {
    if (!requestNoToken.includes(config.url)) {
      const userData = localDataUser.get();
      if (userData) {
        config.headers.token = userData.token;
      } else {
        source.cancel('请求已取消：未获取到 token');
      }
    }

    // post 参数转换为 FormData 形式
    if (config.method === 'post') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      config.data = stringify(config.data);
    }

    return config;
  },
  (error) => {
    return promiseError(error, '请求错误');
  }
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const data = response.data;
    if (!data || data.success === false) {
      // 判断 token 是否正确
      if (data.tokenInvalid) {
        errorMessage('登陆已过期，请重新登陆');
        localDataUser.clear();
        location.href = '/login'; // 跳转至登陆
      } else {
        return promiseError(data);
      }
    } else {
      return data;
    }
  },
  (error) => {
    return promiseError(error);
  }
);

function promiseError(data, defaultMessage = '服务异常') {
  errorMessage(data || defaultMessage);
  return Promise.reject(data);
}
