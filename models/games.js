'use strict';
module.exports = function(sequelize, DataTypes) {
  var Games = sequelize.define('Games', {
    title: DataTypes.STRING,
    admin: DataTypes.INTEGER
  }, {});

  Games.associate = function(models){
    Games.belongsTo(models.Characters, {
      through: 'GamesJoin',
      foreignKey: 'charID',

    }),
    Games.belongsTo(models.User, {
      through: 'GamesJoin',
      foreignKey: 'userID'
    })
  }

  return Games;
};
