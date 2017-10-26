### 1. Create express application using express-generator
- $ express --view=ejs nodeMongodb

### 2. install mongodb
- npm i -S mongodb

#### install mongodb-org from the official site of mongodb

### Run the code
#### Before running the code, Be confirmed that mongodb server is running
-   $ mongod    // It run the mongodb server
-   $ node index.js

### 3. install mongoose.js
> Mongoose provides a straight-forward, schema-based solution to model your application data.
> It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

#### install mongoose
- $ npm i -S mongoose

> To understand the mongoose, read the quickstart guide from 'mongoosejs.com/docs/index.html'

### 4. Insert and Read data from mongodb

- create mlab account
- create database 
- use database name and password in url for connection