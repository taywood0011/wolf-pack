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
  }
};
