const mongoose = require("mongoose");

const HowlSchema = new mongoose.Schema({
    author: {
        type: String
    },
    authorID: {
        //type: 
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    img: {
        type: String
    }
});


module.exports = mongoose.model("Howl", HowlSchema);
