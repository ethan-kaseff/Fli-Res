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
      state: 'California',
      zipCode: 66211,
      imageLink: '/images/private-jet.jpeg'
     },
     {
       name: 'Pretty Good Plane',
       description: 'I mean, this one is good. It will get you where you need to go with style and everyone knows it. Take Pretty, and you will not look back, even for a second.',
       categoryId: 2,
       yearBuilt: 1998,
       refillMiles: 345,
       state: 'New York',
       zipCode: 64110,
       imageLink: '/images/prop-plane.jpg'
     },
     {
       name: 'Big Hunker',
       description: 'Do you have a big family and want to take them all on your journey with you? Well, by golly th is the plane for you! It has all of the room in the world and the snacks to boot!',
       categoryId: 1,
       yearBuilt: 2015,
       refillMiles: 785,
       state: 'New York',
       zipCode: 65987,
       imageLink: '/images/big-honker.jpg'
     },
     {
       name: 'Black Mamba',
       description: 'This baby is when you are sitting in your penthouse apartment in Singapore and remember that you forgot your favorite bracelet in your house in the Maldives. With the Mamba you will be from here to Timbuktu as fast as you can say "supercalifragilisticexpialidocious".',
       categoryId: 2,
       yearBuilt: 2011,
       refillMiles: 473,
       state: 'Florida',
       zipCode: 10457,
       imageLink: '/images/black-mamba.jpg'
     },
     {
       name: 'Ruined Beauty',
       description: 'What this lovely beauty lacks in its ability to fly around the skies like most planes, it offers you the most breathtaking opportunity to stay in an high end old ruined plane for as long as you wish. Want to enjoy a nice vacation? We got you. Want to work remotely in an amazing spot? We got you too! This is the best option hands down.',
       categoryId: 2,
       yearBuilt: 1785,
       refillMiles: 0.5,
       state: 'California',
       zipCode: 98753,
       imageLink: '/images/ruin.jpg'
     },
     {
       name: 'Speed Demon',
       description: "This plane is just the most fun thing that anyone can think of. It's fast, it's clean, it's fun, and you will love it! Are you curious? Of course you are, that's why you need to book this plan immediately and have the time of your life.",
       categoryId: 2,
       yearBuilt: 2018,
       refillMiles: 303,
       state: 'California',
       zipCode: 57903,
       imageLink: '/images/speed-demon.jpg'
     },
     {
       name: 'Mr. Yellow',
       description: "Mr. Yellow will take you back to the good old days. Days when the wind was in your hair. When helmets were optional. When the world was an easier place and friends were always nearby.",
       categoryId: 2,
       yearBuilt: 1976,
       refillMiles: 254,
       state: 'Florida',
       zipCode: 48932,
       imageLink: '/images/yellow-prop.jpg'
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
