import axios from "axios";

// const userCred = JSON.parse(localStorage.getItem("user"));

const apiClient = axios.create({
  baseURL: "http://localhost:8081/cities",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getCities() {
    return apiClient.get("/cities");
  },

  getOneCityByName(cityName) {
    return apiClient.get("cities/" + cityName);
  },

  addOneCity(cityData) {
    return apiClient.post(
      "/city",
      cityData
      // {
      //   headers: {
      //     Authorization: `Bearer ${userCred.token}`,
      //   },
      // }
    );
  },
};
