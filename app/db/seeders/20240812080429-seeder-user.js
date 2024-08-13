"use strict";
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //untuk create data
    const password = bcrypt.hashSync("rahasia", 10); //penggunaan bcrypt untk hash password

    // Add seed commands here.

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          name: "John Doe",
          email: "admin@gmail.com",
          password: password,
          createdAt: new Date(),
          updatedat: new Date(),
        },
        {
          id: 2,
          name: "Rani",
          email: "rani@gmail.com",
          password: password,
          createdAt: new Date(),
          updatedat: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    // Add commands to revert seed here.

    await queryInterface.bulkDelete("Users", null, {});
  },
};
