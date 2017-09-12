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
      raceId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      classId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      raceName: {
        type: Sequelize.STRING
      },
      className: {
        type: Sequelize.STRING
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
      cha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      currentHP:{
        type: Sequelize.INTEGER
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
        type: Sequelize.STRING
      },
      hitDie:{
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.TEXT
      },
      spellList: {
        type: Sequelize.TEXT
      },
      one: {
        type: Sequelize.INTEGER
      },
      two: {
        type: Sequelize.INTEGER
      },
      three: {
        type: Sequelize.INTEGER
      },
      four: {
        type: Sequelize.INTEGER
      },
      five: {
        type: Sequelize.INTEGER
      },
      six: {
        type: Sequelize.INTEGER
      },
      seven: {
        type: Sequelize.INTEGER
      },
      eight: {
        type: Sequelize.INTEGER
      },
      nine: {
        type: Sequelize.INTEGER
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
