
const db = require("../models");
const jwt = require("jsonwebtoken");
const authWare = require("../middleware/authware");
var mongoose = require("mongoose");

const userTokens = new Map();

function processUserDbResult(res, dbUser, password) {
  if (!dbUser) {
    return res.status(401).json({
      message: "Username or password is incorrect."
    });
  }
  console.log('DB-USER', dbUser);

  if (dbUser.comparePassword(password)) {
    const token = jwt.sign(
      {
        data: dbUser._id
      },
      "superSecretKey"
    );

    userTokens.set(dbUser.username, token);
    console.log('storing user token', dbUser.username, token);

    res.json({
      username: dbUser.username,
      token,
      _id: dbUser._id
    });
  } else {
    res.status(401).json({
      message: "Username or password is incorrect."
    });
  }
}

// this method should be called for EVERY server call after the user has authenticated,
// otherwise you open yourself up to a security gap.  if people know the username and
// the routes, they can hack the application to manipulate other people's data without
// knowing that user's password.  the token is what validates the session in this case.
// you can then run into a "session fixation" security gap, but that is harder to 
// manipulate and would be outside the scope of this type of project.
function validateToken(username, token) {
  const validToken = userTokens.get(username);
  console.log('validating user token', username, token, validToken);
  // return validToken === token;
  return true; // for debugging purposes
}

module.exports = function(app) {
  //======================================================================
  //
  // LOGIN ROUTES
  //
  //======================================================================

  app.post("/api/createuser", function(req, res) {
    console.log("create user api route!!!!");
    const { password } = req.body;
    db.User.create(req.body).then(dbUser =>
      processUserDbResult(res, dbUser, password)
    );
  });

  app.post("/api/authenticate", function(req, res) {
    const { username, password } = req.body;
    db.User.findOne({
      username
    }).then(dbUser => processUserDbResult(res, dbUser, password));
  });

  app.post("/api/validateToken", function(req, res) {
    const { username, token } = req.body;
    db.User.findOne({
      username
    }).then(dbUser => {
      // need to validate that the token is the same one that we gave them
      const valid = validateToken(username, token);
      console.log();
      res.json({
        valid,
        user: dbUser,
      });
    });
  });

  app.get("/api/user/:username", function(req, res) {
    db.User.findOne({ username: req.params.username }).then(function(results) {
      res.json(results);
    });
  });

  //======================================================================
  //
  // CATEGORY ROUTES
  //
  //======================================================================

  app.get("/api/categories", function(req, res) {
    db.Category.find().then(function(results) {
      res.json(results);
    });
  });

  //======================================================================
  //
  // HOWL ROUTES
  //
  //======================================================================

  app.get("/api/howls/:category", function(req, res) {
    db.Howl.find({ category: req.params.category }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/howls", function(req, res) {
    db.Howl.find().then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/howls/author/:username", function(req, res) {
    db.Howl.find({ author: req.params.username }).then(function(results) {
      res.json(results);
    });
  });

  app.post("/api/howl", function(req, res) {
    console.log("adding a howl", req.body);
    db.Howl.create(req.body).then(function(dbHowl) {
      res.json(dbHowl);
    });
  });

  app.delete("/api/howl/:id", function(req, res) {
    db.Howl.remove({_id: req.params.id}).then(function (dbHowl) {
      res.json(dbHowl);
    });
  });

  app.get("/api/howl/:id", function(req, res) {
    db.Howl.findOne({_id: req.params.id}).then(function (dbHowl) {
      res.json(dbHowl);
    });
  });

  //======================================================================
  //
  // PACK ROUTES
  //
  //======================================================================

  app.get("/api/packs/:category", function(req, res) {
    db.Pack.find({ category: req.params.category }).then(function(results) {
      console.log("category search")
      res.json(results);
    });
  });

  app.get("/api/pack/:id", function(req, res) {
    db.Pack.findById(req.params.id)
      .populate("members")
      .then(function(results) {
        res.json(results);
      });
  });

  app.post("/api/packs/:id", function(req, res) {
    const userid = req.body;
    console.log("Request to join pack recieved", req.body);
    db.Pack.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { members: userid._id } },
      { new: true }
    ).then(function(results) {
      console.log(results);
      res.json(results);
    });
  });

  app.post("/api/pack", function(req, res) {
    console.log("adding a pack", req.body);
    db.Pack.create(req.body).then(function(dbPack) {
      res.json(dbPack);
    });
  });

  app.get("/api/packs", function(req, res) {
    db.Pack.find().then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/packs/user/:id", function(req, res) {
    db.Pack.find({}).then(function(results) {
      const data = results.filter(pack => {
        console.log("id:", req.params.id)
        return pack.members.includes(req.params.id);
      });
      console.log("Data:", data)
      res.json(data)
    });
  });

  //======================================================================
  //
  // AVATAR ROUTES
  //
  //======================================================================

  app.get("/api/avatars", function(req, res) {
    db.Avatar.find().then(function(results) {
      res.json(results);
    });
  });
};
