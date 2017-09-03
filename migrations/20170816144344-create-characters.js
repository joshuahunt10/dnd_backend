'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      charName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      race: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      class: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      str: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dex: {
        type: Sequelize.STRING,
        allowNull: false
      },
      con: {
        type: Sequelize.STRING,
        allowNull: false
      },
      int: {
        type: Sequelize.STRING,
        allowNull: false
      },
      wis: {
        type: Sequelize.STRING,
        allowNull: false
      },
      skillProf: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      subClass: {
        type: Sequelize.STRING
      },
      subRace: {
        type: Sequelize.STRING
      },
      alignment: {
        type: Sequelize.STRING
      },
      background: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Characters');
  }
};
