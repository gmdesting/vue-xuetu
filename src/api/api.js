/**
 * 整合接口
 */

import axios from 'axios'
import qs from 'qs'
import { interfaceUrlData } from './interface'
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

// 默认加载loading是打开的
const LoadFlag = true

// 接口地址集合地址
const urlData = {
  ...interfaceUrlData,
}
// vuex状态管理
const ajaxvuex = {
  ...mapActions({
    SAVE_FETCHLOADING:'SAVE_FETCHLOADING'
  })
}


const host = process.env.API_ROOT

// Post接口方法封装
var getPostData = function (self, name, data, vuexname, loadFlag) {
  // 加载loading判断
  if (LoadFlag) {
    self.dispatch('SAVE_FETCHLOADING', true)
  }
  let url = host + urlData[name];
  return axios.post(url, data).then(r => {
    if (r.status == 200) {
      self.dispatch('SAVE_FETCHLOADING', false)
      return Promise.resolve(r)
    } else {
      return Promise.reject(r)
    }
  })
}

// Get接口方法封装
var getGetData = function (self, name, data, vuexname , loadFlag) {
  // 加载loading判断
  if (LoadFlag){
    self.dispatch('SAVE_FETCHLOADING', true)
  }
  let url = host + urlData[name];
  return axios.get(url, { params: data }).then(r => {
    if (r.status == 200) {
      self.dispatch('SAVE_FETCHLOADING', false)
      return Promise.resolve(r)
    } else {
      return Promise.reject(r)
    }
  })
}


export default {
  getPostData,
  getGetData,
  install(Vue, options) {
    // Post接口方法封装
    Vue.prototype.postData = getPostData;
    // get接口方法封装
    Vue.prototype.getData = getGetData;
  }
}