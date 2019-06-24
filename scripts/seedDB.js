const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wpdb");

const CategoriesSeed = [
  {
    name: "Music",
    image: "http://placekitten.com/300/300",
    icon: "paw"
  },
  {
    name: "Gaming",
    image: "http://placekitten.com/300/300",
    icon: "paw"
  },
  {
    name: "Web Design",
    image: "http://placekitten.com/300/300",
    icon: "paw"
  },
  {
    name: "Cats",
    image: "http://placekitten.com/300/300",
    icon: "paw"
  }
];

db.Categories.remove({})
  .then(() => db.Categories.collection.insertMany(CategoriesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

