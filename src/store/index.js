import Vue from "vue";
import Vuex from "vuex";
import actions from "./auth-actions";
import getters from "./auth-getters";
import mutations from "./auth-mutations";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const initialState = () => {
  return { user: null, userInfo: null, error: null };
};

export default new Vuex.Store({
  state: initialState(),
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {},
  plugins: [createPersistedState()],
});
