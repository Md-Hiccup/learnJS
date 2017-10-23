var express = require('express');
var router = express.Router();

//Models
var models = require("../models");

//Sync Database   [ for forcefully delete previous value in DB use .sync({force:true}.then(..) ]
models.sequelize.sync({force: false}).then(function(){
  console.log('Nice! Database looks fine')
}).catch(function(err){
  console.log(err,"Something went wrong with the Database Update!")
});

var User = models.Users;
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  User.findAll().then(user => {
    console.log(user);
    res.json({ status : 200 });
  });
    console.log('index');
});

module.exports = router;
