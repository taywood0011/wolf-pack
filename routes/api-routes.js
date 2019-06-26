const User = require("../models/User");
const db = require("../models");
const jwt = require("jsonwebtoken");
const authWare = require("../middleware/authware");
var mongoose = require("mongoose");

function processUserDbResult(res, dbUser, password) {
  if (!dbUser) {
    return res.status(401).json({
      message: "Username or password is incorrect."
    });
  }

  if (dbUser.comparePassword(password)) {
    const token = jwt.sign(
      {
        data: dbUser._id
      },
      "superSecretKey"
    );

    res.json({
      username: dbUser.username,
      token
    });
  } else {
    res.status(401).json({
      message: "Username or password is incorrect."
    });
  }
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
      { $push: { members: userid.username } },
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

  app.get("/api/packs/user/:username", function(req, res) {
    db.Pack.find({}).then(function(results) {
      const data = results.filter(pack => {
        console.log("Username:", req.params.username)
        return pack.members.includes(req.params.username);
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
