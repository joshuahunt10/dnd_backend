'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Characters',
      'GameId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Games',
          key: 'id'
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
  return queryInterface.removeColumn(
    'Characters',
    'GameId'
  )
  }
};
