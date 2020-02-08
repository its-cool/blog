import request from '@/utils/request';
// import { GLOBAL_CONFIG } from '@/config';

/**
 * 请求实例
 * @param {Object} params
 * @return {AxiosPromise}
 */
export function example(params) {
  return request({
    url: 'http://localhost:3000/getRegiestTypeAccelerate',
    method: 'get',
    params
  });
}
