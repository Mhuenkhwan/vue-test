import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showModal: false,
  },
  mutations: {
    OPENMODAL(state){
      state.showModal = true;
    },
    CLOSEMODAL(state){
      state.showModal = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
