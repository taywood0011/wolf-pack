const mongoose = require("mongoose");

const HowlSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    authorID: {
        type: mongoose.Schema.Types.ObjectId
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
});


module.exports = mongoose.model("Howl", HowlSchema);
