var express = require('express');
var router = express.Router();
const Post = require('../models/Post');
const checkSession = require('../middlewares/checkSession');

/* GET home page. */

router.get('/', function (req, res, next) {
  res.redirect('/account');
});

router.get('/account', checkSession, async (req, res, next) => {
  const posts = await Post.find();
  res.render('account', { lists: posts });
});

router.get('/account/:id', async (req, res, next) => {
  const id = req.params.id;
  await Post.deleteOne({ _id: id });
  const posts = await Post.find();
  res.render('account', { lists: posts });
});

router.get('/create', checkSession, (req, res, next) => {
  res.render('create');
});

router.post('/create', checkSession, (req, res, next) => {
  const post = new Post({ ...req.body });
  post.save();
  res.send('成功');
});

module.exports = router;
