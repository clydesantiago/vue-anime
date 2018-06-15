import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      drawer: false
    },
    mutations: {
      toggleDrawer (state) {
        state.drawer = !state.drawer
      }
    }
  })
}

export default createStore