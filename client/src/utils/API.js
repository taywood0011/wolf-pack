import axios from "axios";

export default {
  showCategories: function() {
    return axios.get("/api/categories");
    
  },

  showAvatars: function() {
    return axios.get("/api/avatars");
  },

  setAvatar: function(id) {
    console.log("Avatar Set! ID:", id)
  },

  getHowls: function (category) {
    if (category !== "all") {
    return axios.get(`/api/howls/${category.toLowerCase()}`)
    } else {
      return axios.get(`/api/howls`)
    }
  },
  getPack: function(id){
    return axios.get("/api/packs/" + id);
  }
};
