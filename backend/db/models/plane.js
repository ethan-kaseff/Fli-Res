'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plane = sequelize.define('Plane', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30]
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    yearBuilt: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    refillMiles: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 2]
      },
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Plane.associate = function(models) {
    // associations can be defined here
    Plane.hasOne(models.Category, {foreignKey: 'categoryId'});
  };
  return Plane;
};