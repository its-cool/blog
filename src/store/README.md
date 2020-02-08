# store

使用 `vuex` 来管理应用状态。

## 简介

- `./index.js` 注册 vuex，创建 `store`
- `./modules/*` 存放各模块的状态

## 规范

- **store 仅存储全局的跨组件交互的状态，如果不是请使用 `data` 与 `props` 保持局部的关系**
- `state` 存放状态，**以及对该状态的说明**
- `getter` 存放计算的 `state`，**以及对该计算状态的说明**
- `mutations` 声明修改状态的方法，**方法名使用小写驼峰形式**
- `actions` 声明触发修改状态的动作，**方法名使用小写驼峰形式**

例如 `./modules/app.js`:

```
/**
 * app store
 * @description
 * 主模块的状态存储
 */
const app = {
  state: {
    // 设备信息，对应方法 - setDevice
    device: 'desktop'
  },
  mutations: {
    // 定义修改设备信息的方法
    // 使用小写驼峰形式
    setDevice(state, device) {
      state.device = device;
    }
  },
  actions: {
    // 定义修改设备信息的动作
    // 使用小写驼峰形式
    toggleDevice({ commit }, device) {
      commit('setDevice', device);
    }
  }
};

export default app;
```
