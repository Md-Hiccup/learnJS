'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      { 
        id: 1,
        email : 'john@gmail.com',
        password : 'john',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 2,
        email : 'jack@gmail.com',
        password : 'jack',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 3,
        email : 'will@gmail.com',
        password : 'will',
        createdAt : new Date(),
        updatedAt : new Date()
      }

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
