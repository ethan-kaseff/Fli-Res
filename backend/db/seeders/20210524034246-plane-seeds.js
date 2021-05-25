'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Planes', [
     {
      name: 'Greatest Plane Ever',
      description: 'This plane goes so fast you would never believe it. It is also super comfy to be in and will give you everything in the world you could ever hope for in terms of a plane!',
      categoryId: 1, 
      yearBuilt: 1995,
      refillMiles: 456,
      state: 'KS',
      zipCode: 66211,
      imageLink: '/images/private-jet.jpeg'
     }
   ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
