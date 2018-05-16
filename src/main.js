// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'amfe-flexible/index.js';
import Vue from 'vue'
import App from './App'
import router from './router'
import Cube from 'cube-ui'
import Vuex from 'vuex'
import vueTap from 'v-tap'
import store from './store'
import api from './api/api'

Vue.use(api)
Vue.use(Vuex)
Vue.use(Cube)
Vue.use(router)
Vue.use(vueTap)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})