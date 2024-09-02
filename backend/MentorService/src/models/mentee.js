'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mentee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mentee.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    college: DataTypes.STRING,
    interest: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Mentee',
  });
  return Mentee;
};