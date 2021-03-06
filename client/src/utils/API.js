import axios from "axios";

export default {
  showCategories: function() {
    return axios.get("/api/categories");
  },

  getUser: function(username) {
    return axios.get("/api/user/" + username);
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

  getHowl: function (id) {
    return axios.get(`/api/howl/${id}`)
  },

  getUserHowls: function(username) {
    return axios.get(`/api/howls/author/${username}`);
  },

  postHowl: function(data) {
    const howl = {
      title: data.title,
      image: data.image,
      category: data.category,
      description: data.description,
      author: data.currentUser.username,
      authorID: data.currentUser._id
    };
    return axios.post("/api/howl", howl);
  },

  deleteHowl: function(howlId) {
    return axios.delete("/api/howl/" + howlId);
  },

  postPack: function(pack) {
    const formattedPack = {
      title: pack.title,
      image: pack.image,
      category: pack.category,
      description: pack.description,
      members: [ pack.currentUser._id ]
    }
    return axios.post("/api/pack", formattedPack);
  },

  getPack: function(id) {
    return axios.get("/api/pack/" + id);
  },

  getPacks: function(category) {
    if (category !== "all") {
      return axios.get(`/api/packs/${category.toLowerCase()}`);
    } else {
      return axios.get(`/api/packs`);
    }
  },

  getUserPacks: function(id) {
    return axios.get(`/api/packs/user/${id}`);
  },

  joinPack: function(id, user) {
    return axios.post(`/api/packs/${id}`, { _id: user });
  }
};
