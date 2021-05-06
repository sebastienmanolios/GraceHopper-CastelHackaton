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
    return apiClient.get("/");
  },

  // addCar(data) {
  //   return apiClient.post("/car", data, {
  //     headers: {
  //       Authorization: `Bearer ${userCred.token}`,
  //     },
  //   });
  // }
};
