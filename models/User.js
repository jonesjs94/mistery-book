const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  favorites: [],
  history: []
}, {minimize: false});

module.exports = mongoose.model("User", UserSchema);