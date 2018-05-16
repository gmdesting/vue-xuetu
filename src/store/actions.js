import api from '@/api/api'

// 窗口信息
export const SAVE_WINDOW_INFO = function ({commit},r) {
  commit('SET_WINDOW_INFO',r)
}
// loading设置
export const SAVE_FETCHLOADING = function ({ commit }, r) {
  commit('SET_FETCHLOADING', r)
}

// 自动化请求
// res是获取的接口名称，也就是数据获得的存放字段。
export const SAVE_DEMO = function (e,wayname) {
  api.getGetData(e, wayname).then(r => {
    e.commit('SET_DEMO', { data: r.data.data[0], ways: wayname})
  })
}
