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
        type: Sequelize.STRING,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      college: {
        type: Sequelize.STRING
      },
      office: {
        type: Sequelize.STRING
      },
      experience_years: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      experience_work: {
        type: Sequelize.JSON
      },
      minutes: {
        type: Sequelize.INTEGER
      },
      sessions: {
        type: Sequelize.INTEGER
      },
      timeslots: {
        type: Sequelize.JSON
      },
      isAvailable: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      expertise: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rating: {
        type: Sequelize.FLOAT
      },
      bio:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      language:{
        type: Sequelize.STRING,
        allowNull:false
      },
      courses:{
        type: Sequelize.JSON
      },
      calendly:{
        type:Sequelize.STRING
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