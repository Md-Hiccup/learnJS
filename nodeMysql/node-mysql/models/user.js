'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('Users', {
    id: { type : DataTypes.STRING, primaryKey: true },
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};