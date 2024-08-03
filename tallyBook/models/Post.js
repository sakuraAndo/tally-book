const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    thing: String,
    descrip: String,
    money: String,
    select: String,
    date: String,
  });
  
  const Post = mongoose.model('Post', postSchema);
  
  module.exports = Post;