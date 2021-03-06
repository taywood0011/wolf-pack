const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PackSchema = new Schema({
  title: {type: String, required: true},
  image: {type: String, required: true},
  category: {type: String, required: true},
  description: {type: String, required: true},
  members: [ { type: Schema.Types.ObjectId, ref: "User" } ],
  chat: {type: Array}

  
});

const Pack = mongoose.model("Pack", PackSchema);
module.exports = Pack