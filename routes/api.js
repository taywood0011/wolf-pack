
const path = require("path")

module.exports = function (app) {

    //POST route to create a new user
    app.post("/api/user", function (req, res) {
        console.log("adding this user:", req.body);
        db.User.create(req.body)
            .then(function (dbUser) {
                res.json(dbUser);
            });
    });

}
