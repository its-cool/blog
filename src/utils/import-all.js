/**
 * 获取路径下所有模块的对象，例如 { moduleA: moduleA }
 * @param requireContext require.context 返回值
 */
export function getAllModules(requireContext) {
  const modules = {};
  importAll(requireContext, (path) => {
    const module = requireContext(path);
    const moduleName = path.replace(/^\.\/(.*)\.\w+$/, '$1');
    modules[moduleName] = module.default || module;
  });
  return modules;
}

/**
 * 目录下所有文件中模块的批量处理
 * @param {function} r 导出函数，require.context() 的返回内容
 * @param {function} callback 得到导入的文件后的回调，默认为第一个参数 `r`
 */
function importAll(r, callback = r) {
  r.keys().forEach(callback);
}
