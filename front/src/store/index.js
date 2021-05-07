import Vue from "vue";
import Vuex from "vuex";
import cityServices from "@/plugins/services/cityServices.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: [],
    city: {
      center: [],
      coordinates: [],
    },
  },

  mutations: {
    SET_CITIES(state, cities) {
      state.cities = cities;
    },

    SET_CITY_BY_ID(state, city) {
      state.city = city;
    },

    // ADD_CITY(state, city) {
    //   state.cities.push(city);
    // },
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

    setCityById({ commit }, cityId) {
      this.state.cities.forEach((city) => {
        if (city._id === cityId) {
          commit("SET_CITY_BY_ID", city);
        }
      });
    },
  },

  modules: {},
});
