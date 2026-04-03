'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      { tableName: 'users', schema: 'public' }, // PostgreSQL schema
      'altphone',
      {
        type: Sequelize.TEXT,
        allowNull: true
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      { tableName: 'users', schema: 'public' },
      'altphone'
    );
  }
};