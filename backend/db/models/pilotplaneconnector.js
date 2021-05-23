'use strict';
module.exports = (sequelize, DataTypes) => {
  const PilotPlaneConnector = sequelize.define('PilotPlaneConnector', {
    pilotId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    planeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  PilotPlaneConnector.associate = function(models) {
    // associations can be defined here
  };
  return PilotPlaneConnector;
};