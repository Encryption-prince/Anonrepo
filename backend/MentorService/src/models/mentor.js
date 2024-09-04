'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mentor.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    college: {
      type: DataTypes.STRING,
    },
    office: {
      type: DataTypes.STRING
    },
    experience_years: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    experience_work: {
      type: DataTypes.JSON,
    },
    minutes: {
      type: DataTypes.INTEGER
    },
    sessions: {
      type: DataTypes.INTEGER
    },
    timeslots: {
      type: DataTypes.JSON,
      allowNull:false
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull:false
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull:false
    },
    expertise: {
      type: DataTypes.STRING,
      allowNull:false
    },
    rating: {
      type: DataTypes.FLOAT
    },
    bio:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    language:{
      type:DataTypes.STRING,
      allowNull:false
    },
    courses:{
      type:DataTypes.JSON
    }
  }, {
    sequelize,
    modelName: 'Mentor',
  });
  return Mentor;
};