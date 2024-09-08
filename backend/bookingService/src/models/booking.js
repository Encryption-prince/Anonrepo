'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    menteeId: {
      type: DataTypes.INTEGER
    },
    mentorId: {
      type: DataTypes.INTEGER
    },
    start: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM,
      allowNull: false,
      defaultValue: 'InProcess',
      values: ['InProcess', 'Booked', 'Cancelled']
    },
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};