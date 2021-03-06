const User = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

bcrypt.hash("password", 10).then(hash => {
  User.create({
    username: "Dart Wader",
    password: hash,
    role: "Admin"
  })
    .then(() => {
      mongoose.connection.close();
    })
    .catch(e => {
      console.log(e);
    });
});
