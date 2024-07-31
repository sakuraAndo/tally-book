const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/post').catch((err) => {
  console.log(err);
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});

const postSchema = new mongoose.Schema({
  thing: String,
  descrip: String,
  money: String,
  select: String,
  date: String,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
