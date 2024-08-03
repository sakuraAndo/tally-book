var express = require('express');
var router = express.Router();
const User = require('../models/User');
const md5 = require('md5');

/* GET home page. */

router.get('/reg', function (req, res, next) {
  res.render('auth/reg');
});

router.post('/reg', (req, res, next) => {
  const { password } = req.body;

  const user = new User({ ...req.body, password: md5(password) });

  user.save().then(() => {
    res.send('保存成功');
  });
});

router.get('/login', (req, res, next) => {
  res.render('auth/login');
});

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  const user = User.findOne({ username: username, password: md5(password) })
    .exec()
    .then((data) => {
      if (!data) {
        return res.send('登录失败');
      } else {
        req.session.username = username;
        // req.session._id = data._id;
        return res.send('登录成功');
      }
    });
});

router.post('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send('错误');
    }
    res.send('已经登出');
  });
});

module.exports = router;
