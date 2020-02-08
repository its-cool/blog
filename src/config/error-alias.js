// 错误信息别名
export const errorAliasMap = {
  'Failed to execute query': '执行查询失败',
  'Network Error': '网络连接失败',
  'timeout of': '网络连接超时'
};

// 获取报错别名
const keys = Object.keys(errorAliasMap);
export function getErrorAlias(message) {
  const key = keys.find((item) => message.includes(item));
  return key ? errorAliasMap[key] : '';
}
