# test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## install Vue

1,安装node.js:

官网下下载，直接“下一步”完成安装后，在终端输入node -v ，如果出现对应的版本号则表示已经安装过了。

2,安装cnpm:

npm: Nodejs下的包管理器。由于国内使用npm会很慢,这里推荐使用淘宝NPM镜像（http://npm.taobao.org/） 

终端中输入： $ npm install -g cnpm –registry=https://registry.npm.taobao.org

3,安装vue-cli脚手架构建工具

npm install -g vue-cli

## 使用 FormMaking

文档地址 URL（<http://docs.form.xiaoyaoji.cn/guide.html)>

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
npm install form-making -S

### 引入 Element

项目中使用的是 element-ui 的组件库，在使用的时候需要引入 Element 包，具体引入方法请参考 Element 文档 快速上手

### 引入 FormMaking

完整引入
import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'

Vue.use(FormMaking)

### 安装http

cnpm install vue-resource
npm install axios --save
npm install --save vuex
npm install --save vue-cookie

## Vue lifecycle

![img](./src/assets/lifecycle.png)
