import axios from "axios";

export default {
  showCategories: function() {
    return axios.get("/api/categories");
  },

  getUser: function (username) {
    return axios.get("/api/user/" + username)
  },

  showAvatars: function() {
    return axios.get("/api/avatars");
  },

  getHowls: function(category) {
    if (category !== "all") {
      return axios.get(`/api/howls/${category.toLowerCase()}`);
    } else {
      return axios.get(`/api/howls`);
    }
  },

  getUserHowls: function (username) {
    return axios.get(`/api/howls/author/${username}`)
  },

  postHowl: function (howl) {
    return axios.post("/api/howl", howl)
  },

  postPack: function (pack) {
    return axios.post("/api/pack", pack)
  },

  getPack: function(id){
    return axios.get("/api/pack/" + id);
  },

  getPacks: function(category){
    return axios.get("/api/packs/" + category.toLowerCase());
  },

  joinPack: function (id, user) {
    return axios.post(`/api/packs/${id}`, {_id: user});
  }
};
