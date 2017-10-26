var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/newuser', function (req, res) {
  var newUser = new User();
  newUser.local.email = req.body.email;
  newUser.local.password = req.body.password;
  console.log(newUser.local.email + ' ' + newUser.local.password);
  newUser.save(function (err) {
    if (err)
      throw  err;
  });
  res.json({
    msg : "new User inserted Successfully"
  });
});

router.get('/list', function (req, res) {
  User.find({},function (err, user) {
    if(err)
      res.json(err);
    if (user)
      res.send({'list' : user});
    console.log('user : ', user);
  })
});

module.exports = router;
