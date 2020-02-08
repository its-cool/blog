/**
 * 本地数据管理基类
 * @description 如果有数据有过期时间并且未过期返回本地数据，否则返回 null
 *
 * @method get 获取数据
 * @method set 设置数据
 * @method clear 清理数据
 *
 * @example
 * const userToken = new LocalDataManager('USER_TOKEN');
 * userToken.set({id: 1, name: 1, token: 'test'});
 * userToken.get();
 */
export class LocalDataManager {
  name = '';
  constructor(name) {
    // 抛出重复的名称错误
    const existNames = LocalDataManager._existNames;
    if (existNames.includes(name)) {
      throw `本地缓存错误：${name} 名称重复`;
    } else {
      existNames.push(name);
    }

    this.name = name;
  }

  /**
   * 获取
   * @returns {string/null} 如果有数据有过期时间并且未过期返回本地数据，否则返回 null
   */
  get() {
    const data = getLocalData(this.name);
    if (data && (data.expires > Date.now() || !data.expires)) {
      return data;
    } else {
      this.clear();
      return null;
    }
  }

  // 设置
  set(data) {
    setLocalData(this.name, data);
  }

  // 清理
  clear() {
    clearLocalData(this.name);
  }
}
LocalDataManager._existNames = [];

/**
 * 获取本地数据
 * @param {string} name localStorage 名称
 */
function getLocalData(name) {
  const data = localStorage.getItem(name);
  if (data) {
    return JSON.parse(data);
  } else {
    return data;
  }
}

/**
 * 设置本地数据
 * @param {string} name localStorage 名称
 * @param {any} data 存储的内容
 */
function setLocalData(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

/**
 * 清理本地数据
 * @param {string} name localStorage 名称
 */
function clearLocalData(name) {
  localStorage.removeItem(name);
}
