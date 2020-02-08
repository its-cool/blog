# mock 服务

使用 [`mockjs`](https://github.com/nuysoft/Mock/wiki/Getting-Started) 创建 mock 服务。

> `mockjs` 可以生成随机的复杂数据进行测试，查看文档了解更多。

## 简介

- `./index.js` mock 服务的入口文件，存放配置信息与 mock 数据的批量导入与 mock 服务的创建。
- `./data/` 存放所有的 mock 数据，可以使用嵌套目录。

## 使用

在 `./data/` 目录下新建业务的数据文件，格式如下:

```
export const exampleData = {
  url: '/example',
  method: 'post',
  response: {
    test: 'test'
  }
};
```

## 注意事项

- `url` 不用带接口前缀路径，该配置已写入 `./index.js`。
- `./data/` 下的 js 不用在 `./index.js` 中引入，已经进行批量的导入了。
- `./data/` 下的模拟数据可以使用文件夹嵌套。
- `./data/` 下的模拟数据可以使用 `export default ...`。
