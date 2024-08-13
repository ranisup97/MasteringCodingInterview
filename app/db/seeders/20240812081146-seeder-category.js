"use strict";
const bcrypt = require('bcrypt');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add seed commands here.

    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Bussines & Economics",
          user: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Art & Design",
          user: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Agriculture",
          user: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    // Add commands to revert seed here.

    await queryInterface.bulkDelete("Categories", null, {});
  },
};
