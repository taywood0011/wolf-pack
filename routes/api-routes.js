const User = require("../models/User");
const jwt = require("jsonwebtoken");
const authWare = require("../middleware/authware");

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
  app.post("/api/createuser", function(req, res) {
    const { password } = req.body;
    User.create(req.body).then(dbUser =>
      processUserDbResult(res, dbUser, password)
    );
  });

  app.post("/api/authenticate", function(req, res) {
    const { username, password } = req.body;
    User.findOne({
      username
    }).then(dbUser => processUserDbResult(res, dbUser, password));
  });
};
