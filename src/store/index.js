import Vue from 'vue'
import Vuex from 'vuex'
import vuexp from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bgColor: 'orange',
    bookList: []
  },
  getters: {
    done(state) {
      return state.bookList.filter(item => item.status == true)
    },
    doing(state) {
      return state.bookList.filter(item => item.status == false)
    }
  },
  mutations: {
    setColor(state) {
      state.bgColor = '#' + Math.random().toString(16).slice(2, 8)
    },
    addFn(state, obj) {
      state.bookList.push({
        ...obj,
        status: false
      })
    },
    changeStatus(state, id) {
      let index = state.bookList.findIndex(item => item.id == id)
      state.bookList[index].status = !state.bookList[index].status
    },
    del(state, id) {
      let index = state.bookList.findIndex(item => item.id == id)
      state.bookList.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexp()]
})
