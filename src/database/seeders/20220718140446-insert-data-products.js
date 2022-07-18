"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          product_name: "Indomie Goreng",
          description: "Mie goreng Indonesia",
          stock: 58,
          availability: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "Indomie Ayam Bawang",
          description: "Mie kuah rasa ayam bawang Indonesia",
          stock: 20,
          availability: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "Indomie Goreng Rendang",
          description: "Mie goreng rasa rendang Indonesia",
          stock: 0,
          availability: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "Mie Sedap Goreng",
          description: "Mie goreng sedap",
          stock: 0,
          availability: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "Indomie Soto Ayam",
          description: "Mie kuah rasa soto ayam Indonesia",
          stock: 31,
          availability: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null, {});
  },
};
