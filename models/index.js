const fs = require("fs");

const db = {};

const files = fs.readdirSync(__dirname);

const modelFiles = files.filter(name => name !== "index.js");
modelFiles.forEach(name => {
  const model = require(`./${name}`);
  const modelName = model.modelName;
  db[modelName] = model;
});

module.exports = db;
