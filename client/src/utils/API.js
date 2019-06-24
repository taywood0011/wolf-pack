import axios from "axios";

export default {
  showCategories: function() {
    return axios.get("/api/categories");
    
  },

  getPack: function(id){
    return axios.get("/api/packs/" + id);
  }
};
