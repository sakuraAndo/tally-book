const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', postSchema);

module.exports = User;
