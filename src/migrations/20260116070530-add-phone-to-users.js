"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "users",               // table name
      "phone",               // new column
      {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "phone");
  }
};
