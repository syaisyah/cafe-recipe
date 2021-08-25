'use strict';
let data = [
  { name: "Espresso" },
  { name: "Milk" },
  { name: "Strawberry Syrup" },
  { name: "Chocolate Syrup" },
  { name: "Vanilla Syrup" },
  { name: "Whipped Cream" },
]

for (let ingredient of data) {
  ingredient.createdAt = new Date()
  ingredient.updatedAt = new Date()
}


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Ingredients', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Ingredietns', null, {})
  }
};
