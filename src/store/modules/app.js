/**
 * app store
 * @description
 * 主模块的状态存储
 */
export default {
  namespaced: true,
  state: {
    // 设备信息，对应方法 - setDevice
    device: 'desktop'
  },
  mutations: {
    setDevice(state, device) {
      state.device = device;
    }
  },
  actions: {
    setDevice({ commit }, device) {
      commit('setDevice', device);
    }
  }
};
