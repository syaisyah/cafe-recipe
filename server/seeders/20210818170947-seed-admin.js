'use strict';
const { hashPassword } = require('../helpers/password')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      full_name: 'Admin',
      email: 'admin@mail.com',
      password: hashPassword('123456'),
      role: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
