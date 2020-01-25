# vue-integrate

[TOC]

Vue 集成开发环境。

> 参考资料：
>
> - 流行的后台集成框架 [PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)
> - Angular 风格指南 [angular/styleguide](https://angular.cn/guide/styleguide)
> - Vue 风格指南 [vue/styleguide](https://cn.vuejs.org/v2/style-guide)
> - React 理念 [react/thinking-in-react](https://react.docschina.org/docs/thinking-in-react.html)

## 简介
人博客初始项目: 基于 vue-cli@3.0，增加如下基本功能（后面是对应的说明文档或配置文件）：

- UI 框架 [element-ui](https://element.eleme.cn/#/zh-CN) - [README](src/plugins/element.js)
- 路由管理 [vue-router](https://router.vuejs.org/zh/installation.html) - [README](src/router/index.js)
- 路由管理 [vue-router](https://router.vuejs.org/zh/installation.html) - [README](src/router/index.js)
- HTTP 请求 [axios](https://github.com/axios/axios) - [README](src/utils/request.js)
- 模拟数据 [mockjs](https://github.com/nuysoft/Mock/wiki/Getting-Started) - [README](src/mock/README.md)
- 强制代码校验 [eslint](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint) + [prettier](https://prettier.io/) - [README](.eslintrc.js)
- SVG 图标库 [vue-awesome](https://github.com/Justineo/vue-awesomes) - [README](src/plugins/svg-icon.js)
- 全局样式 - [README](src/styles/README.md)
- 测试 - [README](tests/README.md)

## 目录结构说明

```
vue-integrate
  - public
    - config.js - 后端的服务地址配置

  - src - 主业务代码目录
    - api - 数据的请求方法
    - assets - 共用的静态资源
    - components - 共用的组件
    - layout - 主页的布局容器
    - mock - 模拟接口数据
    - plugins - 使用的插件
    - router - 路由配置
    - store - 全局的状态管理
    - styles - 全局的样式配置
    - utils - 工具函数存放目录
    - views - 主业务的页面路径
    - tests - 测试类目录
    - main.js - 入口文件

  - .env - 环境变量配置文件
  - .eslintrc.js - eslint 配置文件
  - .svnignore - svn 忽略文件
  - .babel.config.js - babel 编译配置文件
  - jest.config.js - jest 测试配置文件
  - perttier.config.js - perttier 配置文件
  - proxy.config.js - 开发服务器代理配置
  - vue.config.js - vue-cli 的配置文件
```

## 注意事项

- **如果服务器上有二级路径，需要配置资源加载的二级路由，配置文件在根目录中的 .env 文件中**
- **element-ui 使用来按需加载，使用未注册的组件时，先到 [src/plugins/element.js](src/plugins/element.js) 文件中注册组件。**

## 开发流程与规范

### 流程

1. 根据原型图/设计图进行路由设计（不写代码，只是画出路由的草稿图）
2. 根据原型图/设计图将页面进行组件的划分（简单的列出各组件之前的关系草稿图）
3. 写路由配置与基础的入口组件（此时不带任何的业务）
4. 依次按照“父组件，子组件”顺序编写基础的页面布局（先不写交互逻辑）
5. 布局完成后，开始设计/思考组件数据存储/交互方式，如：`data` `props` `store` 等
6. 开始编写组件的交互逻辑（注意保持**单一职责原则**，考虑如何让组件间的关系解耦）
7. 涉及到接口交互时，编写 mock 数据进行模拟交互
8. 然后优化交互体验，增加一些过渡效果
9. 最后进行与后端的接口联调，数据结构的调整等

### 规范

**为了保护项目的可维护性，可扩展性以及高效的编码，编写方式务必保持一致。**

> 以下规则不包含所有的规则，例如一些默认规则。

#### 单一职责

对所有的组件，指令，过滤器，接口请求方法等应用**单一职责原则(SRP)**。

- 坚持每个组件或者模块只做一件事。
- 坚持把文件大小限制在 400 行以内。
- 坚持定义小函数，考虑在 75 行以内。

#### 文件命名

保持不同类型的文件命名风格一致。

- 组件名使用多个单词，例如组件名带上该模块的前缀。
- 在描述性名字中，用横杠来分割单词。
- 尽量使用功能的特性去命名。

#### 代码编写

##### JS

- 坚持使用大写驼峰来命名类。
- 坚持使用 const 声明变量。
- 坚持使用小写驼峰来命名属性与方法。
- 坚持将自定义的模块导入与第三方的模块导入中间空一行。
- 坚持在非头部的注释上面增加一行空行。

##### CSS

- 坚持使用类名去命名样式。
- 坚持使用公共的样式类，避免重复的样式属性。
- 坚持在每个组件使用一个容器类包含所有的子类。
- 坚持在父子组件之间不发生样式类名的重复。

> 建议 [BEM 命名规范](https://github.com/Tencent/tmt-workflow/wiki/%E2%92%9B-%5B%E8%A7%84%E8%8C%83%5D--CSS-BEM-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)：理论上讲，每行 css 代码都只有一个选择器。

##### HTML

- 坚持考虑尽可能的扁平化布局。
- 坚持使用语义化的标签，而不是为了该标签的样式。
- 坚持将带计算逻辑的模版变量转换为 `computed` 或者 通用的 `filters`。
- 避免使用内联样式。

##### Vue 单文件

- 坚持以 `template`, `script`, `style` 顺序写组件。
- 坚持组件的 `data` 为函数，非对象。
- 坚持为 `prop` 的属性定义 `required`, `validator`, 类型等详细信息。
- 坚持为 `v-for` 设置 `key`。
- 避免将 `v-if` 与 `v-for` 用在一起。
- 坚持为组件的私有属性使用 `$_` 前缀。
- 坚持为组件的样式设置作用域。

#### 代码提交

- 坚持在提交代码前校验代码，解决每一个警告。
- 坚持一次 commit 只进行一个功能的更改。
- 坚持使用 `type(subtype): description` 形式提交 commit，`type` 如下：
  - `feat` 新增的功能
  - `chore` 构建过程或辅助工具的变动
  - `refactor` 重构（即不是新增功能，也不是修改 bug 的代码变动）
  - `style` 修改格式，不影响逻辑
  - `fix` 修复问题
  - `revert` 回滚
  - `docs` 编写文档
  - `test` 测试类

## 开始

- `npm start` 开启开发服务器
- `npm run build` 进行打包
- `npm run build-analyzer` 进行打包与体积分析
- `npm run lint` 运行代码校验
- `npm run test` 运行单元测试
