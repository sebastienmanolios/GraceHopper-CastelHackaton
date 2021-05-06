import Vue from "vue";
import Vuex from "vuex";
import cityServices from "@/plugins/services/cityServices.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: [],
    city: {},
  },

  mutations: {
    SET_CITIES(state, cities) {
      state.cities = cities;
    },

    SET_CITY_BY_NAME(state, city) {
      state.city = city;
    },

    ADD_CITY(state, city) {
      state.cities.push(city);
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

    setCityByName({ commit }, cityName) {
      cityServices
        .getEventById(cityName)
        .then((res) => {
          commit("SET_CITY_BY_NAME", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    addCity({ commit }, cityData) {
      cityServices
        .addCar(cityData)
        .then((res) => {
          commit("ADD_CITY", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  modules: {},
});
