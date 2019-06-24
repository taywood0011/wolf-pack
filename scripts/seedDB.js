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
    name: "Pets",
    image: "http://placekitten.com/300/300",
    icon: "paw"
  },
  {
    name: "All",
    image: "http://placekitten.com/300/300",
    icon: "paw"
  }
];

const HowlSeed = [
  {
    author: "CaptnDestructo",
    img: "",
    title: "Forming Electro-Swing Band",
    description:
      "We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!",
    category: "music"
  },
  {
    author: "Anonymous",
    img: "",
    title: "Looking for study group",
    description:
      "Do you need help learning web dedvelopment? Me too. That's why I created this howl. Please help me. Please.",
    category: "web development"
  },
  {
    author: "FSAisGood62",
    img: "",
    title: "Full Stack Attack Fan Group",
    description:
      "I love Full Stack Attack and am looking for people to play with and truly appreciate all the hilarious jokes hidden within.",
    category: "gaming"
  },
  {
    author: "Xx_bootcamp_dropout_xX",
    img: "",
    title: "Full Stack Attack Competitive",
    description:
      "I've beaten the game with the dropout character, working to optimize the strategy for the incredibly complex and dynamic game. Want a group to talk about it with",
    category: "gaming"
  },
  {
    author: "partially-obsessed",
    img: "",
    title: "ISO Partials Fan Group",
    description:
      "I <3 Alex Eversbusch",
    category: "music"
  },
  {
    author: "meeeeeooooowwwww",
    img: "",
    title: "Cats",
    description:
      "Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats",
    category: "pets"
  }
]

db.Category.deleteMany({})
  .then(() => db.Category.collection.insertMany(CategoriesSeed))
  .then(data => {
    console.log(data.result.n + " category documents inserted!");
  })
  .catch(err => {
    console.error(err);
  });

db.Howl.deleteMany({})
  .then(() => db.Howl.collection.insertMany(HowlSeed))
  .then(data => {
    console.log(data.result.n + " howl documents inserted!");
  })
  .catch(err => {
    console.error(err);
  });
