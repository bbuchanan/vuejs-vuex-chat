// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import Client from './components/Client'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.component('client', Client)

const store = new Vuex.Store({
  state: {
    messages: []
  },
  getters: {
    messages: state => state.messages
  },
  mutations: {
    addMessage: (state, msg) => {
      state.messages.push(msg)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store: store
})
