'use strict';
module.exports = function(sequelize, DataTypes) {
  var Characters = sequelize.define('Characters', {
    charName: DataTypes.STRING,
    race: DataTypes.STRING,
    class: DataTypes.STRING,
    str: DataTypes.STRING,
    dex: DataTypes.STRING,
    con: DataTypes.STRING,
    int: DataTypes.STRING,
    wis: DataTypes.STRING,
    cha: DataTypes.STRING,
    currentHP: DataTypes.INTEGER,
    skillProf: DataTypes.ARRAY(DataTypes.STRING),
    subClass: DataTypes.STRING,
    subRace: DataTypes.STRING,
    alignment: DataTypes.STRING,
    background: DataTypes.STRING,
    level: DataTypes.STRING,
    bio: DataTypes.TEXT,
    hitDie: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    GameId: DataTypes.INTEGER
  }, {});

  Characters.associate = function(models){
    Characters.belongsTo(models.Users)
    Characters.belongsTo(models.Games)

  }
  return Characters;
};
