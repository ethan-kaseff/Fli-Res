'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    planeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
  };
  return Favorite;
};