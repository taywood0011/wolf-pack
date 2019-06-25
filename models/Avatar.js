const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AvatarSchema = new Schema({
  image: {
    type: String,
    required: true
  }
});

const Avatar = mongoose.model("Avatar", AvatarSchema);
module.exports = Avatar
