const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        index: {
            unique: true
        }
    },
    password: String,
    location: String,
    description: String,
    userAvatar: {
        type: Schema.Types.ObjectId,
        ref: "Avatar"
    }
});

UserSchema.methods.comparePassword = function (inputPass) {
    return bcrypt.compareSync(inputPass, this.password);
}

UserSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();

    this.password = bcrypt.hashSync(this.password, 10);

    return next();
});

module.exports = mongoose.model("User", UserSchema);
