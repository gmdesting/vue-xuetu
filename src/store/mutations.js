const mutations ={
  // 窗口信息
  ['SET_WINDOW_INFO'](state,r){
    state.windowinfo = r
  },
  // loading设置
  ['SET_FETCHLOADING'](state,r){
    state.fetchloading = r
  },
  ['SET_DEMO'](state,r){
    state[r.ways] = r.data
    console.log(state)
  },
}

export default mutations