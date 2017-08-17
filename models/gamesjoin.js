'use strict';
module.exports = function(sequelize, DataTypes) {
  var GamesJoin = sequelize.define('GamesJoin', {
    gamesID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    charID: DataTypes.INTEGER
  });
  
  return GamesJoin;
};
