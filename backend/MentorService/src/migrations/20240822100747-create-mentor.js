'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mentors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userid: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bio: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      experience: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      IsAlumni: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      College: {
        type: Sequelize.STRING
      },
      Specialization: {
        allowNull: false,
        type: Sequelize.JSON
      },
      Social: {
        type: Sequelize.JSON
      },
      IsAvailable: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      timeslot: {
        allowNull: false,
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Mentors');
  }
};