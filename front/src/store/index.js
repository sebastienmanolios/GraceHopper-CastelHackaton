import Vue from "vue";
import Vuex from "vuex";
import cityServices from "@/plugins/services/cityServices.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: [],
  },

  mutations: {
    SET_CITIES(state, cities) {
      state.cities = cities;
    },
  },

  actions: {
    setCities({ commit }) {
      cityServices
        .getCities()
        .then((res) => {
          commit("SET_CITIES", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  modules: {},
});
