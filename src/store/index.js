import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      userName: '未登录'
    }
  },
  getters: {
    userInfo(state){
      if(state.userInfo.userName === '未登录'){
        state.userInfo.userName = sessionStorage.getItem('userName') || '未登录';
      }
      return state.userInfo;
    }
  },
  mutations: {
    changeLoginStatus (state, status) {
      state.userInfo.userName = status;
      sessionStorage.setItem('userName', status);
    }
  },
  actions: {
    actionLogin ({commit}, status) {
      commit('changeLoginStatus', status)
    }
  },
  modules: {
  }
})
