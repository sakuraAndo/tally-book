module.exports = function (success) {
  const mongoose = require('mongoose');
  mongoose
    .connect('mongodb://127.0.0.1:27017/post')
    .then(() => {
      console.log('连接成功');
      success();
    })
    .catch((err) => {
      console.log(err);
    });

  mongoose.connection.on('error', (err) => {
    console.log(err);
  });
};
