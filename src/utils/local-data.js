import { LocalDataManager } from './local-storage';

// 存储用户信息
export const localDataUser = new LocalDataManager('USER_DATA');

// 存储应用信息
export const localDataApp = new LocalDataManager('APP_DATA');
