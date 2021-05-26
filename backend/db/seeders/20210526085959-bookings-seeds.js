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
   return queryInterface.bulkInsert('Bookings', [
     {
       planeId: 1,
       userId: 1,
       startDate: new Date('2021-06-10'),
       endDate: new Date('2021-06-15')
     },
     {
       planeId: 1,
       userId: 1,
       startDate: new Date('2021-06-20'),
       endDate: new Date('2021-06-24')
     },


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
