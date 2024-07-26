var express = require('express');
var router = express.Router();
const nanoid = require('nanoid');
const db = require('../db');

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/account', (req, res, next) => {
  const lists = db.get('posts').value();
  res.render('account', {lists: lists});
});

router.get('/create', (req, res, next) => {
  res.render('create');
});

router.post('/create', (req, res, next) => {
  db.get('posts')
    .push({ id: nanoid(), ...req.body })
    .write();
  res.send('成功');
});

module.exports = router;
