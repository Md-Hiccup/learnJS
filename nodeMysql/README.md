
### 1. Create the Express App
#### First install the express-generator
- $ npm install -g express-generator

#### Create the express app
- $ express --view=ejs node-mysql
    
#### Install the all dependencies
- $ cd node-mysql
- $ npm install
    
#### To run the server 
- $ npm start

### 2. Install mysql and Create DB
#### Set username 'root' and password 'root' 

#### Login to mysql with username and password
- $ mysql -u root -p 

#### Create the database 'node_mysql'
- $ create database node_mysql;


### 3. Install Sequelize-cli ORM for mysql 
#### install sequezlie-cli 
- $ npm i -S sequelize-cli sequelize 

#### initialize Sequelize 
- $ sequelize init
> It wll create the folder migration, seeder, models/index.js and config/config.json
> set username, password to 'root' and database to 'node_mysql' in development object inside config/config.json file

- $ sequelize model:create --name User --attributes id:integer,email:string,password:string
> It will create the schema models/user.js and migrations/create-user.js
> make 'id' as primary key.

- $ sequelize db:migrate
> For creating table in mysql

#### For Seeding means for dummy values
- $ sequelize seed:create --name Item
> It create the file in seeders folder. Now you can easily insert dummy values inside it.

- $ sequelize db:seed:all
> To seed into the mysql 

#### Install mysql2 
- $ npm i --save mysql2 

### 4. Do some changes in routes/index.js
```
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
```

### 5. Run the server
#### Befor running insert some dummy values
- $ sequelize db:seed:all
- $ npm start
      
