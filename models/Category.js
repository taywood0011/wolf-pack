const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
  name: {type: String, required: true},
  image: {type: String, required: true},
  icon: {type: String, required: true}
  
});

const Categories = mongoose.model("Category", CategoriesSchema);
module.exports = Categories
