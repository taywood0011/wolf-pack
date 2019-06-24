const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wpdb");

const CategoriesSeed = [
  {
    name: "Music",
    image: "http://placekitten.com/300/300",
    icon: "headphones"
  },
  {
    name: "Gaming",
    image: "http://placekitten.com/300/300",
    icon: "gamepad"
  },
  {
    name: "Web Design",
    image: "http://placekitten.com/300/300",
    icon: "object-group"
  },
  {
    name: "Pets",
    image: "http://placekitten.com/300/300",
    icon: "paw"
  },
  {
    name: "Sports",
    image: "http://placekitten.com/300/300",
    icon: "basketball-ball"
  },
  {
    name: "Entertainment",
    image: "http://placekitten.com/300/300",
    icon: "film"
  },
  {
    name: "Outdoors",
    image: "http://placekitten.com/300/300",
    icon: "campground"
  },
  {
    name: "All",
    image: "http://placekitten.com/300/300",
    icon: "shapes"
  },
];


const HowlSeed = [
  {
    title: "CaptnDestructo",
    image: "",
    title: "Forming Electro-Swing Band",
    description:
      "We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!",
    category: "music"
  },
  {
    title: "Anonymous",
    image: "",
    title: "Looking for study group",
    description:
      "Do you need help learning web dedvelopment? Me too. That's why I created this howl. Please help me. Please.",
    category: "web development"
  },
  {
    title: "FSAisGood62",
    image: "",
    title: "Full Stack Attack Fan Group",
    description:
      "I love Full Stack Attack and am looking for people to play with and truly appreciate all the hilarious jokes hidden within.",
    category: "gaming"
  },
  {
    title: "Xx_bootcamp_dropout_xX",
    image: "",
    title: "Full Stack Attack Competitive",
    description:
      "I've beaten the game with the dropout character, working to optimize the strategy for the incredibly complex and dynamic game. Want a group to talk about it with",
    category: "gaming"
  },
  {
    title: "partially-obsessed",
    image: "",
    title: "ISO Partials Fan Group",
    description:
      "I <3 Alex Eversbusch",
    category: "music"
  },
  {
    title: "meeeeeooooowwwww",
    image: "",
    title: "Cats",
    description:
      "Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats",
    category: "pets"
  }
];

const PackSeed = [
  {
    title: "CaptnDestructo",
    image: "http://placekitten.com/300/300",
    title: "Forming Electro-Swing Band",
    category: "music",
    description:
      "We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!",
    category: "music",
    members: [],
    chat: ""

  },
  {
    title: "Anonymous",
    image: "http://placekitten.com/300/300",
    title: "Looking for study group",
    category: "music",
    description:
      "Do you need help learning web dedvelopment? Me too. That's why I created this howl. Please help me. Please.",
    category: "web development",
    members: [],
    chat: ""

  },
  {
    title: "FSAisGood62",
    image: "http://placekitten.com/300/300",
    title: "Full Stack Attack Fan Group",
    category: "music",
    description:
      "I love Full Stack Attack and am looking for people to play with and truly appreciate all the hilarious jokes hidden within.",
    category: "gaming",
    members: [],
    chat: ""

  },
  {
    title: "Xx_bootcamp_dropout_xX",
    image: "http://placekitten.com/300/300",
    title: "Full Stack Attack Competitive",
    category: "music",
    description:
      "I've beaten the game with the dropout character, working to optimize the strategy for the incredibly complex and dynamic game. Want a group to talk about it with",
    category: "gaming",
    members: [],
    chat: ""

  },
  {
    title: "partially-obsessed",
    image: "http://placekitten.com/300/300",
    title: "ISO Partials Fan Group",
    category: "music",
    description:
      "I <3 Alex Eversbusch",
    category: "music",
    members: [],
    chat: ""

  },
  {
    title: "meeeeeooooowwwww",
    image: "http://placekitten.com/300/300",
    title: "Cats",
    category: "music",
    description:
      "Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats Cats",
    category: "pets",
    members: [],
    chat: ""

  }
];


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

db.Pack.deleteMany({})
  .then(() => db.Pack.collection.insertMany(PackSeed))
  .then(data => {
    console.log(data.result.n + " pack documents inserted!");
  })
  .catch(err => {
    console.error(err);
  });
