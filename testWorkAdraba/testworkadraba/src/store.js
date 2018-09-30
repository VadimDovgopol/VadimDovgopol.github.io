import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectMovie: null
    // Current state of the application lies here.
  },
  getters: {
    // Compute derived state based on the current state. More like computed property.
  },
  mutations: {
    setSelectMovie (state, id) {
      state.selectMovie = id
    }
  }
  ,
  actions: {
    // Get data from server and send that to mutations to mutate the current state
  }
})
