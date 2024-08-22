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
      allowNull: false
    },
    userid:{
      type: DataTypes.INTEGER,
      allowNull:false
    } ,
    bio: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    IsAlumni: {
      type: DataTypes.BOOLEAN,
      allowNull:false
    },
    College: {
      type: DataTypes.STRING
    },
    Specialization: {
      type: DataTypes.JSON,
      allowNull:false
    },
    Social: {
      type: DataTypes.JSON
    },
    IsAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false
    },
    timeslot: {
      type : DataTypes.JSON,
      allowNull:false
    }

  }, {
    sequelize,
    modelName: 'Mentor',
  });
  return Mentor;
};