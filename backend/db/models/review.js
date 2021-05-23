'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    planeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Plane, { foreignKey: "planeId" });
    Review.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Reviews;
};