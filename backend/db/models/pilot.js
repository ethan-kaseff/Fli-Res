'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pilot = sequelize.define('Pilot', {
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
  }, {});
  Pilot.associate = function(models) {
    // associations can be defined here

    const columnMapping = {
      through: 'PilotPlanConnector',
      otherKey: 'planeId',
      foreignKey: 'pilotId'
    }
    Pilot.belongsToMany(models.Plane, columnMapping);
  };
  return Pilot;
};