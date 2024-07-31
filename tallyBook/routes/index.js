var express = require('express');
var router = express.Router();
const nanoid = require('nanoid');
const Post = require('../db/db');

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/account', async (req, res, next) => {
  const posts = await Post.find();
  res.render('account', { lists: posts });
});

router.get('/account/:id', async (req, res, next) => {
  const id = req.params.id;
  await Post.deleteOne({ _id: id });
  const posts = await Post.find();
  res.render('account', { lists: posts });
});

router.get('/create', (req, res, next) => {
  res.render('create');
});

router.post('/create', (req, res, next) => {

  const post = new Post({ ...req.body });
  post.save();
  res.send('成功');
});

module.exports = router;
