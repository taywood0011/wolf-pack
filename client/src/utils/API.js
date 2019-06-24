import axios from "axios";

export default {
  showCategories: function() {
    return axios.get("/api/categories");
    
  }
};
