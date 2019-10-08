import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    selectedSection: 'open-source'
  },
  mutations: {
    selectSection(state, section) {
      state.selectedSection = section
    }
  },
  getters: {
    selectedSection: state => state.selectedSection
  }
})
