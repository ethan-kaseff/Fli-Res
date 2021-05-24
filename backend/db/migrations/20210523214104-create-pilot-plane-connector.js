'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PilotPlaneConnectors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pilotId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Pilots",
          key: "id"
        }
      },
      planeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Planes",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PilotPlaneConnectors');
  }
};