import axios from "axios";

export default {
  showCategories: function() {
    return axios.get("/api/categories");
    
  },

  getHowls: function (category) {
    if (category !== "all") {
    return axios.get(`/api/howls/${category.toLowerCase()}`)
    } else {
      return axios.get(`/api/howls`)
    }
  },

  getUserHowls: function (username) {
    return axios.get(`/api/howls/author/${username}`)
  },

  postHowl: function (howl) {
    return axios.post(`/api/howls`, howl)
  },

  getPack: function(id){
    return axios.get("/api/packs/" + id);
  }
};
