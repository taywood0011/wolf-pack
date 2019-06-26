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
    if (category !== "all") {
      return axios.get(`/api/packs/${category.toLowerCase()}`);
    } else {
      return axios.get(`/api/packs`);
    }
  },

  getUserPacks: function (id) {
    return axios.get(`/api/packs/user/${id}`)
  },

  joinPack: function (id, user) {
    return axios.post(`/api/packs/${id}`, {username: user});
  }
};
