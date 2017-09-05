'use strict';
module.exports = function(sequelize, DataTypes) {
  var Players = sequelize.define('Players', {
    GameId: DataTypes.INTEGER,
    CharacterId: DataTypes.INTEGER
  });

  Players.associate = function(models){
    Players.belongsTo(models.Characters)
    Players.belongsTo(models.Games)
    // Players.belongsTo(models.User, {foreignKey: 'id', targetKey: 'userID'})
    // Players.belongsTo(models.Games, {foreignKey: 'id', targetKey: 'gamesID'})
  }

  return Players;
};
