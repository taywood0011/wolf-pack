import axios from "axios";

export default {

  login: (username, password) => {
    // return axios.post("/api/login", username, password);
    return "Login function called"
  },

  createUser: (username, password) => {
    // return axios.get("/api/books/" + id);
    return "CreateUser function called"
  },

};
