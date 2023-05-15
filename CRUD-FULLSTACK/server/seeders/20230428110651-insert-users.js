'use strict';

const generateUser = (key) => ({
  first_name: `Name${key}`,
  last_name: `Surname${key}`,
  email: `surname${key}@gmail.com`,
  password_hash: 'hash',
  birthday: new Date(1970, 0, key * 10),
  is_male: Math.random() > 0.5,
  created_at: new Date(),
  updated_at: new Date(),
});

const usersGenerate = (amount = 50) => {
  return new Array(amount).fill(null).map((el, i) => generateUser(i));
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', usersGenerate(100), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
