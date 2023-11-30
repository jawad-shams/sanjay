import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
const dataState = createPersistedState({
  paths: ['data']
})

export default new Vuex.Store({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
  modules: {
   
  },
  plugins: [dataState]
});
