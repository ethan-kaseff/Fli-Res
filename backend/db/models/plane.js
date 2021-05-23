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
    Plane.hasMany(models.Review, {foreignKey: 'planeId'})

    const columnMapping = {
      through: 'Favorites',
      otherKey: 'userId',
      foreignKey: 'planeId'
    }
    Plane.belongsToMany(models.User, columnMapping);

    Plane.hasMany(modles.Booking, { foreignKey: 'planeId'})

    const columnMapping2 = {
      through: 'PilotPlanConnectors',
      otherKey: 'pilotId',
      foreignKey: 'planeId'
    };
    Plane.belongsToMany(models.Pilot, columnMapping2)

  };
  return Plane;
};