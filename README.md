# vue-xuetu

## Build Setup

``` bash

# i (应当使用npm，cube-ui的cnpm有问题)
npm install

# serve with hot reload at localhost:8075
npm run start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 介绍:
采用了vue2.0的全家桶.\
框架上选用了MUI和Cube-ui.\
在是配上选择了淘宝的amfe，单位为rem(不想转换就注释/**no**/).\
在调试上使用vsconsole.\

数据流向:\
1.actions中用axios请求获取到数据;\
2.在actions中调用mutations中的方法;\
3.在mutations中,更新state;\
4.路由组件获取新的state;\

