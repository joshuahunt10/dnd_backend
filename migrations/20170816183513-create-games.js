'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // userID: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'GamesJoin',
      //     key: 'id'
      //   }
      // },
      // charID: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Characters',
      //     key: 'id'
      //   }
      // },
      admin: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Games');
  }
};
