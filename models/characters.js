'use strict';
module.exports = function(sequelize, DataTypes) {
  var Characters = sequelize.define('Characters', {
    charName: DataTypes.STRING,
    raceId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER,
    raceName: DataTypes.STRING,
    className: DataTypes.STRING,
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
    spellList: DataTypes.TEXT,
    hitDie: DataTypes.STRING,
    one: DataTypes.INTEGER,
    two: DataTypes.INTEGER,
    three: DataTypes.INTEGER,
    four: DataTypes.INTEGER,
    five: DataTypes.INTEGER,
    six: DataTypes.INTEGER,
    seven: DataTypes.INTEGER,
    eight: DataTypes.INTEGER,
    nine: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    GameId: DataTypes.INTEGER,
    requestedRoll: DataTypes.BOOLEAN,
    submittedRoll: DataTypes.STRING,
    rollMessage: DataTypes.STRING
  }, {});

  Characters.associate = function(models){
    Characters.belongsTo(models.Users)
    Characters.belongsTo(models.Games)

  }
  return Characters;
};
