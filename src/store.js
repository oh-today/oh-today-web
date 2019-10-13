import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    sectionHeader: ''
  },
  mutations: {
    setSectionHeader(state, sectionHeader) {
      state.sectionHeader = sectionHeader
    },
  },
  actions: {

  }
})
