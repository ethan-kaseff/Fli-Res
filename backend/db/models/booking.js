'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    planeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.hasOne(models.User, { foreignKey: 'userId'});
    Booking.hasOne(models.Plane, { foreignKey: 'planeId'})
  };
  return Booking;
};