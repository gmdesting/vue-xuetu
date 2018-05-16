import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


export const index = [
    { path: '/', name: '首页', component: resolve => { require(['@/view/index/index'], resolve); } }
]

export const routers = [
    ...index,
];

const router = new Router({
    routes: routers
})

export default router