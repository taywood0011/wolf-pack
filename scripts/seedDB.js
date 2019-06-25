const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wpdb");

const CategoriesSeed = [
  {
    name: "music",
    image: "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-music_pcn9ig.jpg",
    icon: "headphones"
  },
  {
    name: "gaming",
    image: "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-gaming_twcusi.png",
    icon: "gamepad"
  },
  {
    name: "coding",
    image: "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-webdesign_d3butw.jpg",
    icon: "object-group"
  },
  {
    name: "pets",
    image: "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-pets_mvjyob.jpg",
    icon: "paw"
  },
  {
    name: "sports",
    image: "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-sports_ajswo3.jpg",
    icon: "basketball-ball"
  },
  {
    name: "entertainment",
    image: "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-entertainment_dkvkjg.jpg",
    icon: "film"
  },
  {
    name: "outdoors",
    image: "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-outdoor_wlqmbq.jpg",
    icon: "campground"
  },
  {
    name: "all",
    image: "https://res.cloudinary.com/dd0yofein/image/upload/v1561477396/cat-all_gzoqrr.jpg",
    icon: "shapes"
  },
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
    category: "coding"
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
      "Hardcore Alex Eversbusch Fanboy",
    category: "music"
  },
  {
    author: "meowTime87",
    img: "",
    title: "Crazy Cat Lady",
    description:
      "DM me for invites to my cat's Quincinera",
    category: "pets"
  }
];

const PackSeed = [
  {
    image: "",
    title: "Forming Electro-Swing Band",
    description:
      "We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!",
    category: "music",
    members: [],
    chat: ""

  },
  {
    image: "",
    title: "Bootcamo Study group",
        description:
      "Let's meet at Rays and study. Maybe cry a little too.",
    category: "web development",
    members: [],
    chat: ""

  },
  {
    image: "",
    title: "Full Stack Attack Fan Group",
    description:
      "Full Stack Attack enthusiaists looking for people to play with and truly appreciate all the hilarious jokes hidden within.",
    category: "gaming",
    members: [],
    chat: ""

  },
  {
    image: "",
    title: "Full Stack Attack Competitive League",
    description:
      "Intense character optimization required and professional FSA players only. No noobs.",
    category: "gaming",
    members: [],
    chat: ""

  },
  {
    image: "",
    title: "Partials Fan Group",
    description:
      "Fans of Alex",
    category: "music",
    members: [],
    chat: ""

  },
  {
    image: "",
    title: "Crazy Cat People",
    description:
      "Only cats. We will be making a detailed schedule to talk about and pet all the cats",
    category: "pets",
    members: [],
    chat: ""
  },
  {
    image: "",
    title: "Airbud Enthusiaists",
    description:
      "Detailed intensive dicussions about the psychology of human and animal relationships in the Airbud film saga",
    category: "entertainment",
    members: [],
    chat: ""
  },
  {
  image: "",
  title: "Sports Team",
  description:
    "Lets play sports and score the points and get the goals. Go sports",
  category: "sports",
  members: [],
  chat: ""
  }
];


const AvatarSeed = [
  {
    img: "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    img: "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-moon_avb5hx.jpg"
  },
  
  {
    img: "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-mountain_vdpyi0.jpg"
  },
  
  {
    img: "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-sunset_jholjt.jpg"
  },
  
  {
    img: "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-stars_gj7k0g.jpg"
  },
  
  {
    img: "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-vines_hoe9ev.jpg"
  },
  
  {
    img: "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-wolf_wfhfza.jpg"
  },
  
  {
    img: "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-wolfscary_jtrxay.jpg"
  },
  
  {
    img: "https://res.cloudinary.com/dd0yofein/image/upload/v1561476121/av-wolfpup_y7mfyv.jpg"
  },
  
  {
    img: "https://res.cloudinary.com/dd0yofein/image/upload/v1561476121/av-wolfbot_kdi93k.jpg",
  },
  {
    img: "https://res.cloudinary.com/dd0yofein/image/upload/v1561476121/av-wolfwhite_g2azjf.jpg"
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

  db.Avatar.deleteMany({})
  .then(() => db.Avatar.collection.insertMany(AvatarSeed))
  .then(data => {
    console.log(data.result.n + " avatar documents inserted!");
  }).catch(err => {
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

