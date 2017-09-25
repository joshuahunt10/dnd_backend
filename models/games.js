'use strict';
module.exports = function(sequelize, DataTypes) {
  var Games = sequelize.define('Games', {
    title: DataTypes.STRING,
    adminUserId: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {});

  Games.associate = function(models){
    Games.hasMany(models.Characters)
  }

  return Games;
};
