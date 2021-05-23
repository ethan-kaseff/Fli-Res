'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
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
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Plane, {foreignKey: 'categoryId'})
  };
  return Categories;
};