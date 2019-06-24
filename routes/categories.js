
const db = require("../models");

module.exports = function(app){
    app.get("/api/categories", function (req, res) {
    console.log(req.body);
    db.Categories.find()
        .then(function (results) {
            res.json(results);
        });
});
}
