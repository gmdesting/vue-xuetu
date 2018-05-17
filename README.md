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

## 介绍:
采用了vue2.0的全家桶.\
框架上选用了MUI和Cube-ui.\
在是配上选择了淘宝的amfe,单位为rem(不想转换就注释/星no星/).\
在调试上使用vsconsole.

数据流向:\
1.actions中用axios请求获取到数据.\
2.在actions中调用mutations中的方法.\
3.在mutations中,更新state.\
4.路由组件获取新的state.

注意:\
1.因为使用了MUI框架，所以布局要按MUI布局要求来进行.\
2.移动端点击延迟，采用了v-tap.

