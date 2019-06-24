const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PackSchema = new Schema({
  title: {type: String, required: true},
  image: {type: String, required: true},
  catagory: {type: String, required: true},
  description: {type: String, required: true},
  members: [],
  chat: ""
  
});

const Pack = mongoose.model("Category", PackSchema);
module.exports = Pack