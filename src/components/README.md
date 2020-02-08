# 全局组件

## 使用

1. 在当前目录 components/ 下新建组件文件夹，例如：hello-world
2. 在 components/hello-world/ 下新建组件入口文件 index.vue
3. 在其他组件中引入使用该组件

```vue
<template>
  <hello-world msg="Hello world!"></hello-world>
</template>
```

## 注意事项

1. 无需在组件中再次引入全局组件，组件已在 index.js 中注册
2. 组件的文件夹命名请使用统一的短横线 "-" 分隔单词
3. 组件的入口文件请使用统一的 index.vue
