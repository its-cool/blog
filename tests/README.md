# 测试

这里包括**单元测试**与**e2e 测试**。

- `./unit/*` 单元测试目录
- `./e2e/*` 端到端测试目录（_待完善_）

## 单元测试

使用 [@vue/unit-jest](https://vue-test-utils.vuejs.org/zh/guides/testing-single-file-components-with-jest.html) 插件进行单元测试。查看 [Vue Test Utils](https://vue-test-utils.vuejs.org/zh/guides/)，了解更多测试技巧。

### 目录结构

不同类型的模块测试存放在不同目录里。

```
unit
  - components - 存放组件的单元测试
  - ...
```

### 文件命名

采取 `[测试文件名].spec.js` 命名模式。

### 测试代码编写

```
// describe 方法第一个参数为待测试文件的路径名
describe('basic-information-platform/components/HelloWorld.vue', () => {

  // it 方法第一个参数为待测试文件的功能点测试名称
  it('renders props.msg when passed', () => {

    // ...

  });
});
```

### 附录 - 常用测试方法

#### 断言方法

- `toBe()` === `Object.is()`，此方法不能用于检测对象/数组
- `toEqual()` 检测对象/数组是否相同
- `toBeNull()` null
- `toBeUndefined()` undefined
- `toBeDefine()` defined
- `toBeTruthy()` true
- `toBeFalsy()` false
- `toBeGreaterThan()` 大于
- `toBeGreaterThanOrEqual()` 大于或等于
- `toBeLessThan()` 小于
- `toBeLessThanOrEqual()` 小于或等于
- `toMatch()` 匹配字符串，使用正则
- `toContain()` 测试数组是否包含该值
- `toThrow()` 报错

#### Vue 组件测试方法

- `const wrapper = mount(ComponentA, { propsData: any })` 方法挂载组件
- `const wrapper = shalloMount(ComponentA)` 方法挂在一个组件，不渲染其子组件
- `const vm = wrapper.vm` 得到组件的实例
- `wrapper.html()` 得到实例的 DOM
- `wrapper.emitted()` 方法取得事件记录（通过 `vm.$emit()` 触发的事件数组）
- `wrapper.setData()` 方法修改 data 属性
- `wrapper.setProps()` 方法修改 props 属性

#### 事件触发测试实例

```
import sinon from 'sinon';

describe('Click event', () => {
    it('...', () => {
        const spy = sinon.spy();
        const wrapper = mount(Component, {
            propsData: {
                callMe.spy
            }
        })
        wrapper.find('button.yes').tigger('click');

        spy.should.have.been.calledWith('yes');
    })
})
```
