const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PackSchema = new Schema({
  title: {type: String, required: true},
  image: {type: String, required: true},
  catagory: {type: String, required: true},
  description: {type: String, required: true},
  members: {type: Array},
  chat: {type: String}

  
});

const Pack = mongoose.model("Pack", PackSchema);
module.exports = Pack