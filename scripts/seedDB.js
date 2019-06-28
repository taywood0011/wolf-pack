const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wpdb");

const CategoriesSeed = [
  {
    name: "music",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-music_pcn9ig.jpg",
    icon: "headphones"
  },
  {
    name: "gaming",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-gaming_twcusi.png",
    icon: "gamepad"
  },
  {
    name: "coding",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-webdesign_d3butw.jpg",
    icon: "object-group"
  },
  {
    name: "pets",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-pets_mvjyob.jpg",
    icon: "paw"
  },
  {
    name: "sports",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-sports_ajswo3.jpg",
    icon: "basketball-ball"
  },
  {
    name: "entertainment",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-entertainment_dkvkjg.jpg",
    icon: "film"
  },
  {
    name: "outdoors",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-outdoor_wlqmbq.jpg",
    icon: "campground"
  },
  {
    name: "all",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477396/cat-all_gzoqrr.jpg",
    icon: "shapes"
  }
];

const HowlSeed = [
  {
    author: "CaptnDestructo",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg",
    title: "Forming Electro-Swing Band",
    description:
      "We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!",
    category: "music"
  },
  {
    author: "Anonymous",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-moon_avb5hx.jpg",
    title: "Looking for study group",
    description:
      "Do you need help learning web dedvelopment? Me too. That's why I created this howl. Please help me. Please.",
    category: "coding"
  },
  {
    author: "FSAisGood62",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-mountain_vdpyi0.jpg",
    title: "Full Stack Attack Fan Group",
    description:
      "I love Full Stack Attack and am looking for people to play with and truly appreciate all the hilarious jokes hidden within.",
    category: "gaming"
  },
  {
    author: "Xx_bootcamp_dropout_xX",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-sunset_jholjt.jpg",
    title: "Full Stack Attack Competitive",
    description:
      "I've beaten the game with the dropout character, working to optimize the strategy for the incredibly complex and dynamic game. Want a group to talk about it with",
    category: "gaming"
  },
  {
    author: "partially-obsessed",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-stars_gj7k0g.jpg",
    title: "ISO Partials Fan Group",
    description: "Hardcore Alex Eversbusch Fanboy",
    category: "music"
  },
  {
    author: "meowTime87",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-wolf_wfhfza.jpg",
    title: "Crazy Cat Lady",
    description: "DM me for invites to my cat's Quincinera",
    category: "pets"
  },
  {
    author: "corgicorgi",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-wolfscary_jtrxay.jpg",
    title: "Corgi meetup?",
    description: "Looking for a local corgi meetup so I can show off my corg",
    category: "pets"
  },
  {
    author: "bigFoot",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561476121/av-wolfpup_y7mfyv.jpg",
    title: "I live Out here anyway",
    description: "Anyone want to hang out?",
    category: "outdoors"
  },
  {
    author: "hiker2",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg",
    title: "Hiking buddies",
    description: "Looking for more to hike trails in Georgia.",
    category: "outdoors"
  },
  {
    author: "gardener7462",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-vines_hoe9ev.jpg",
    title: "Looking for gardening help",
    description: "I just wet my plants.",
    category: "outdoors"
  },
  {
    author: "mooch65",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-moon_avb5hx.jpg",
    title: "I need a netflix password",
    description:
      "Looking for someone with Netflix. We can hang out or you can just give me your password and I can chill by myself.",
    category: "entertainment"
  },
  {
    author: "booksbooks",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg",
    title: "Looking for Book Nerds",
    description: "Lets argue about books together!",
    category: "entertainment"
  },
  {
    author: "tvperson",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-moon_avb5hx.jpg",
    title: "Looking for fellow color tv fans",
    description: "But i get to hold the remote.",
    category: "entertainment"
  },
  {
    author: "seeker",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-mountain_vdpyi0.jpg",
    title: "Seeker looking for a Quidditch team",
    description:
      "Fast, effective seeker looking to join a Quidditch team. DM me for pics of my broomstick",
    category: "Sports"
  },
  {
    author: "climber554",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-sunset_jholjt.jpg",
    title: "Looking for Parkour group",
    description: "Lets climb stuff and jump off from it.",
    category: "Sports"
  },
  {
    author: "frisbyGolfFan",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-moon_avb5hx.jpg",
    title: "Is this still a thing?",
    description: "Lets throw Frisbees at nets. That's how you play it, right?",
    category: "Sports"
  },
  {
    author: "SuperBowlYes",
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-moon_avb5hx.jpg",
    title: "Looking for Super Bowl Party",
    description:
      "I don't care who's playing and I will root for any team you want. Really I just want to eat guacamole and chicken wings.",
    category: "Sports"
  }
];

const PackSeed = [
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-music_pcn9ig.jpg",
    title: "Forming Electro-Swing Band",
    description:
      "We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!",
    category: "music",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-music_pcn9ig.jpg",
    title: "Partials Fan Group",
    description: "Fans of The Fantastic Band Partials",
    category: "music",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-music_pcn9ig.jpg",
    title: "Fans of Afrobeat",
    description: "People who love Afrobeat Music",
    category: "music",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-webdesign_d3butw.jpg",
    title: "Bootcamp Study group",
    description: "Let's meet at Rays and study. Maybe cry a little too.",
    category: "coding",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-webdesign_d3butw.jpg",
    title: "Machine Learning",
    description: "We love machine learning and are always learning new things.",
    category: "coding",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-webdesign_d3butw.jpg",
    title: "React Pack",
    description: "Let's meet up and share our knowledge of React.",
    category: "coding",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-gaming_twcusi.png",
    title: "Full Stack Attack Fan Group",
    description:
      "Full Stack Attack enthusiaists looking for people to play with and truly appreciate all the hilarious jokes hidden within.",
    category: "gaming",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-gaming_twcusi.png",
    title: "Full Stack Attack Competitive League",
    description:
      "Intense character optimization required and professional FSA players only. No noobs.",
    category: "gaming",
    members: [],
    chat: ""
  },

  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-gaming_twcusi.png",
    title: "League Of Legends Competitive League",
    description:
      "Intense character optimization required and professional LOL players only. No noobs.",
    category: "gaming",
    members: [],
    chat: ""
  },

  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-pets_mvjyob.jpg",
    title: "Crazy Cat People",
    description:
      "Only cats. We will be making a detailed schedule to talk about and pet all the cats",
    category: "pets",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-pets_mvjyob.jpg",
    title: "Shih-Tzu Lovers",
    description:
      "Only Shih-Tzus. Shih-Tzus are the best dogs. Shihtz gonna be lit!",
    category: "pets",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-pets_mvjyob.jpg",
    title: "Kinkajou Lovers",
    description:
      "A group for people who have or have ever had a Kinkajou as a pet.",
    category: "pets",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-entertainment_dkvkjg.jpg",
    title: "Airbud Enthusiasts",
    description:
      "Detailed intensive dicussions about the psychology of human and animal relationships in the Airbud film saga",
    category: "entertainment",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-entertainment_dkvkjg.jpg",
    title: "Dunkirk Enthusiasts",
    description:
      "Detailed intensive dicussions about the psychology of human and animal relationships in the Dunkirk film saga",
    category: "entertainment",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-entertainment_dkvkjg.jpg",
    title: "The Avenegers Enthusiasts",
    description:
      "Detailed intensive dicussions about the psychology of human and animal relationships in the Dunkirk and Airbud film sagas",
    category: "entertainment",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-sports_ajswo3.jpg",
    title: "Sports Team",
    description:
      "Lets play sports and score the points and get the goals. Go sports",
    category: "sports",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-sports_ajswo3.jpg",
    title: "Quidditch Team",
    description: "Lets get together and play Quidditch",
    category: "sports",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-sports_ajswo3.jpg",
    title: "Par Kour Competitive League",
    description:
      "Lets show off our best moves and see who can do the most hardcore Par Kour!",
    category: "sports",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-sports_ajswo3.jpg",
    title: "Day Hiking Enthusiasts",
    description:
      "Let's talk about our favorite trails, and do some cool day hikes together!",
    category: "outdoors",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-sports_ajswo3.jpg",
    title: "Backpacking Enthusiasts",
    description:
      "Let's get out into the back country and use our fancy new equipments!",
    category: "outdoors",
    members: [],
    chat: ""
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561477141/cat-sports_ajswo3.jpg",
    title: "Rock Climbers",
    description: "Let's talk about our favorite climbing spots!",
    category: "outdoors",
    members: [],
    chat: ""
  }
];

const UserSeed = [
  {
    username: "CaptnDestructo",
    password: "captndestructo",
    location: "Atlanta, GA",
    description: "I destroyed everything as a child! I like sports and coding.",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    username: "Anonymous",
    password: "anonymous",
    location: "A Mysterious Desert",
    description: "I prefer to remain anonymous",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    username: "FSAisGood62",
    password: "fsaisgood62",
    location: "Atlanta, GA",
    description: "I love fullstack attack! Lets connect!",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    username: "Xx_bootcamp_dropout_xX",
    password: "xx_bootcamp_dropout_xx",
    location: "Atlanta, GA",
    description: "I was so scared on day one I had to drop out!",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    username: "partially-obsessed",
    password: "partially-obsessed",
    location: "Atlanta, GA",
    description: "My favorite band by far is Partials!",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    username: "meowTime87",
    password: "meowtime87",
    location: "Atlanta, GA",
    description: "I love my kitties!",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    username: "corgicorgi",
    password: "corgicorgi",
    location: "Atlanta, GA",
    description: "I love my Corgis!",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    username: "bigFoot",
    password: "bigfoot",
    location: "Atlanta, GA",
    description: "Im a great guy lets meet!",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    username: "hiker2",
    password: "hiker2",
    location: "Atlanta, GA",
    description: "I love hiking! Lets connect!",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    username: "gardener7462",
    password: "gardener7462",
    location: "Atlanta, GA",
    description:
      "I love gardening! Come over and see my garden sometime! Ill give you vegetables.",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    username: "mooch65",
    password: "gmooch65",
    location: "Atlanta, GA",
    description: "I need a netflix password! Help!",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    username: "booksbooks",
    password: "booksbooks",
    location: "Atlanta, GA",
    description: "I am just obsessed with books!",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    username: "tvperson",
    password: "tvperson",
    location: "Atlanta, GA",
    description: "I love TV!",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    username: "seeker",
    password: "seeker",
    location: "Atlanta, GA",
    description: "I am seeking anything and everything",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    username: "climber554",
    password: "climber554",
    location: "Atlanta, GA",
    description: "Lets do some rock climbing",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    username: "frisbyGolfFan",
    password: "frisbygolffan",
    location: "Atlanta, GA",
    description: "Lets play some frisby golf.",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    username: "SuperBowlYes",
    password: "Superbowlyes",
    location: "Atlanta, GA",
    description: "Huge football fan. Whats Up!.",
    userAvatar:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  }
];

const AvatarSeed = [
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475536/av-lake_ptnjqv.jpg"
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-moon_avb5hx.jpg"
  },

  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-mountain_vdpyi0.jpg"
  },

  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-sunset_jholjt.jpg"
  },

  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-stars_gj7k0g.jpg"
  },

  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-vines_hoe9ev.jpg"
  },

  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-wolf_wfhfza.jpg"
  },

  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561475555/av-wolfscary_jtrxay.jpg"
  },

  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561476121/av-wolfpup_y7mfyv.jpg"
  },

  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561476121/av-wolfbot_kdi93k.jpg"
  },
  {
    image:
      "https://res.cloudinary.com/dd0yofein/image/upload/v1561476121/av-wolfwhite_g2azjf.jpg"
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

db.User.deleteMany({})
  .then(() => {
    return UserSeed.map(user => db.User.create(user));
  })
  .then(userCreatePromises => {
    return Promise.all(userCreatePromises);
  })
  .then(() => {
    console.log("users inserted!");
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
